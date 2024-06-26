import HtmlAttrs from './attributes';
import SvgAttrs from './svg-attributes';

export type AttrsByTag = HtmlAttrs & SvgAttrs
export type Tag = keyof AttrsByTag;
type Attrs = AttrsByTag[keyof AttrsByTag];
type AttrValue = Attrs[keyof Attrs];

export type Children = null | undefined | boolean | string | number | AnyElement | Array<Children>;

export interface Element<T extends Tag> {
    tag: T;
    attrs: AttrsByTag[T];
    children: Children;
    fn?: undefined;
};

export interface FunctionElement<P> {
    fn: (props: P) => Children;
    attrs: P;
}

const escapedStringTag = Symbol('escapedString');

export type EscapedString = {tag: typeof escapedStringTag, value: string, fn?: undefined};

export type AnyElement = {[K in Tag]: Element<K>}[Tag] | FunctionElement<any> | EscapedString;

const doctype = '<!DOCTYPE HTML>';

const voidElements = new Set([
    // https://html.spec.whatwg.org/multipage/syntax.html#elements-2
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
    'param', 'source', 'track', 'wbr',
]);

type RawTextTags = 'script' | 'style';
const rawTextElem = new Set(['script', 'style']);

export interface StringifyOptions {
    /** If true, adds an HTML5 doctype at the beginning. */
    includeDoctype?: boolean;
}

/** Stringify an element. @see h for creating those elements. */
export function stringify(elt: AnyElement | string | null, opts: StringifyOptions={}) {
    const main = stringify1(elt);
    return opts.includeDoctype ? doctype + main : main;
}

/** Stringify an element's children. */
export const stringifyChildren = (children: Children): EscapedString => ({
    tag: escapedStringTag,
    value: stringify1(children),
});

function stringify1(elt: Children): string {
    if (elt == null || typeof elt === 'boolean') return '';
    if (Array.isArray(elt)) return elt.map(stringify1).join('');
    if (typeof elt === 'string') return escapeHtml(elt);
    if (typeof elt === 'number') return elt.toString();
    if (elt.fn !== undefined) {
        return stringify1(elt.fn(elt.attrs));
    }
    if (elt.tag === escapedStringTag) return elt.value;
    const attrs = stringifyAttrs(elt.attrs);
    if (voidElements.has(elt.tag)) {
        if (!childrenIsEmpty(elt.children)) {
            throw new Error(`Void element ${elt.tag} received children.`);
        }
        return `<${elt.tag}${attrs}>`;
    }
    if (rawTextElem.has(elt.tag) && !childrenIsEmpty(elt.children)) {
        let children = elt.children;
        if (Array.isArray(children) && children.every(c => typeof c === 'string')) {
            children = children.join('');
        }
        if (typeof children !== 'string') {
            throw new Error(`${elt.tag} should have string children only.`);
        }
        return `<${elt.tag}${attrs}>${escapeRaw(elt.tag, children)}</${elt.tag}>`;
    }
    return `<${elt.tag}${attrs}>${stringify1(elt.children)}</${elt.tag}>`;
}

function childrenIsEmpty(children: Children): boolean {
    if (children === null) return true;
    if (Array.isArray(children)) return children.length === 0;
    return typeof children === 'string' && children === '';
}

/** Stringify the attributes for an element, including a leading space if not empty. */
function stringifyAttrs(attrs: Attrs): string {
    const entries = Object.entries(attrs) as [string, AttrValue][];
    let ret = '';
    for (const [name, val] of entries) {
        // This is where a lot of the React-inherited magic handling of attribute names/values happens.
        // cf. React (v17.0.1/packages/react-dom/src/shared/DOMProperty.js#L236-625)
        const adjustedVal = adjustAttributeValue(name, val);
        if (adjustedVal == null) continue;
        const adjustedName = adjustAttributeName(name);
        ret += ` ${adjustedName}="${adjustedVal}"`
    }
    return ret;
}

const namespaceAttrs = new Set([
    // Attributes for which the first segment is a namespace
    'xmlBase', 'xmlLang', 'xmlSpace',
    'xlinkHref', 'xlinkType', 'xlinkRole', 'xlinkArcrole', 'xlinkTitle', 'xlinkShow', 'xlinkActuate',
]);

const camelAttrs = new Set([
    // Attributes that shouldn't be kebab-cased
    'allowReorder','attributeName','attributeType','autoReverse','baseFrequency', 'baseProfile', 'calcMode',
    'clipPathUnits', 'contentScriptType', 'contentStyleType', 'diffuseConstant', 'edgeMode',
    'externalResourcesRequired', 'filterRes', 'filterUnits', 'glyphRef', 'gradientTransform', 'gradientUnits',
    'kernelMatrix', 'kernelUnitLength', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'limitingConeAngle',
    'markerHeight', 'markerUnits', 'markerWidth', 'maskContentUnits', 'maskUnits', 'numOctaves', 'pathLength',
    'patternContentUnits', 'patternTransform', 'patternUnits', 'pointsAtX', 'pointsAtY', 'pointsAtZ',
    'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'referrerPolicy', 'refX', 'refY', 'repeatCount',
    'repeatDur', 'requiredExtensions', 'requiredFeatures', 'specularConstant', 'specularExponent', 'spreadMethod',
    'startOffset', 'stdDeviation', 'stitchTiles', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX',
    'targetY', 'textLength', 'viewBox', 'viewTarget', 'xChannelSelector', 'yChannelSelector', 'zoomAndPan',
]);

function adjustAttributeName(name: string): string {
    switch (name) {
        case 'className': return 'class';
        case 'htmlFor': return 'for';
        default:
            if (camelAttrs.has(name)) return name;
            if (namespaceAttrs.has(name)) return kebab(name).replace('-', ':');
            return escapeHtml(kebab(name));
    }
}

const propTypes: Partial<Record<string, 'BOOLEAN' | 'OVERLOADED_BOOLEAN'>> = {};
// cf. React (v17.0.1/packages/react-dom/src/shared/DOMProperty.js#L236-625)
[
    'allowfullscreen', 'async', 'autofocus', 'autoplay', 'controls', 'default', 'defer', 'disabled',
    'disablePictureInPicture', 'disableRemotePlayback', 'formnovalidate', 'hidden', 'loop', 'nomodule',
    'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'scoped', 'seamless',
    'itemscope', 'checked', 'multiple', 'muted', 'selected',
].forEach(attr => propTypes[attr] = 'BOOLEAN');
['capture', 'download'].forEach(attr => propTypes[attr] = 'OVERLOADED_BOOLEAN');

/** Handle boolean-valued attributes and escape number/string-valued attributes. */
function adjustAttributeValue(name: string, value: AttrValue): string | null {
    if (value == null) return null;
    switch (propTypes[name]) {
        case 'BOOLEAN':
            return value ? "" : null;
        case 'OVERLOADED_BOOLEAN':
            if (value === true) return "";
            if (value === false) return null;
            return escapeAttr(value);
        default:
            return escapeAttr(value);
    }
}

const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};

/** Escape an attribute value for inclusion in a tag. */
function escapeAttr(unsafeValue: string | number | boolean): string {
    if (typeof unsafeValue === 'boolean' || typeof unsafeValue === 'number')
        return '' + unsafeValue;
    return escapeHtml(unsafeValue);
}

/** Escape a string for inclusion in an HTML context. */
function escapeHtml(unsafeString: string): string {
    return unsafeString.replace(/[&<>"']/g, c => htmlEscapes[c as keyof typeof htmlEscapes]);
}

/** Escape a string for inclusion in a 'raw text' context (inline script/style). */
function escapeRaw(tag: string, unsafeString: string): string {
    // WhatWG 13.1.2.6 Restrictions on the contents of raw text and escapable raw text elements
    switch (tag) {
        case 'script':
            return unsafeString.replace(/<\/script([\t\n\f\r >/])/gi, (_, c) => '<\\/script' + c);
        case 'style':
            return unsafeString.replace(/<\/style([\t\n\f\r >/])/gi, (_, c) => '<\\/style' + c);
        default:
            throw new Error('Unexpected tag for raw escape: ' + tag);
    }
}

/** Convert a camel-cased string into a kebab-cased string. */
function kebab(camel: string): string {
    // This is only used for attribute names, so only check ASCII
    return camel.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
};

type JsxAttrs = {
    [K in Tag]: AttrsByTag[K] & {children?: K extends RawTextTags ? string | string[]: Children};
};

type MaybeNull<T> = {} extends T ? T | null : T;

export function h<T extends Tag>(tag: T, attrs: MaybeNull<AttrsByTag[T]>, ...children: Children[]): Element<T>;
export function h<P extends object>(fn: (props: P) => Children, attrs: Omit<P, 'children'>, ...children: Children[]): FunctionElement<P>;
export function h(tagOrFn: Tag | ((props: any) => Children), attrs: any, ...children: Children[]): AnyElement {
    if (typeof tagOrFn === 'string') {
        return {tag: tagOrFn as any, attrs: attrs ?? {}, children};
    } else {
        attrs = attrs ? {...attrs} : {};
        attrs.children = children;
        return {fn: tagOrFn, attrs};
    }
}

/** Render its children without any wrapping elements. */
export function Fragment(props: {children: Children}): FunctionElement<{children: Children}> {
    return {fn: p => p.children, attrs: props};
}

declare global {
    namespace JSX {
        type Element = AnyElement | string | null;
        type ElementClass = never;
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }
        // data-* elements are special-cased by TypesScript to ignore in excess property checks, so
        // don't need to specify here
        type IntrinsicElements = JsxAttrs;
    }
}
