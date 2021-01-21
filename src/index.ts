import AttrsByTag from './attributes';

type Tag = keyof AttrsByTag;
type Attrs = AttrsByTag[Tag];
type AttrValue = Attrs[keyof Attrs];

export type Children = null | undefined | string | AnyElement | Array<Children>;

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

type EscapedString = {tag: typeof escapedStringTag, value: string, fn?: undefined};

export type AnyElement = {[K in Tag]: Element<K>}[Tag] | FunctionElement<any> | EscapedString;

const doctype = '<!DOCTYPE HTML>';

const voidElements = new Set([
    // https://html.spec.whatwg.org/multipage/syntax.html#elements-2
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
    'param', 'source', 'track', 'wbr',
]);

export interface StringifyOptions {
    /** If true, adds an HTML5 doctype at the beginning. */
    includeDoctype?: boolean;
}

/** Stringify an element. @see h for creating those elements. */
export function stringify(elt: AnyElement, opts: StringifyOptions={}) {
    const main = stringify1(elt);
    return opts.includeDoctype ? doctype + main : main;
}

/** Stringify an element's children. */
export const stringifyChildren = (children: Children): EscapedString => ({
    tag: escapedStringTag,
    value: stringify1(children),
});

function stringify1(elt: Children): string {
    if (elt == null) return '';
    if (Array.isArray(elt)) return elt.map(stringify1).join('');
    if (typeof elt === 'string') return escapeHtml(elt);
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
    if (childrenIsEmpty(elt.children)) {
        return `<${elt.tag}${attrs}/>`;
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

/** Attribute names to lowercase instead of kebab-casing. */
const justLower = new Set([
    'contentEditable', 'spellCheck', // BOOLEANISH_STRING

    // BOOLEAN
    'allowFullScreen', 'autoFocus', 'autoPlay', 'disablePictureInPicture', 'disableRemotePlayback',
    'formNoValidate', 'noModule', 'noValidate', 'playsInline', 'readOnly', 'itemScope',

    'rowSpan', // NUMERIC
    'tabIndex', 'crossOrigin', // STRING
    'formAction', // URLS (STRING)
]);

function adjustAttributeName(name: string): string {
    switch (name) {
        case 'className': return 'class';
        case 'htmlFor': return 'for';
        default:
            if (justLower.has(name))
                return escapeHtml(name.toLowerCase());
            return escapeHtml(kebab(name));
    }
}

const propTypes: Partial<Record<string, 'BOOLEAN' | 'OVERLOADED_BOOLEAN'>> = {};
// cf. React (v17.0.1/packages/react-dom/src/shared/DOMProperty.js#L236-625)
[
    'allowFullScreen', 'async', 'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled',
    'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule',
    'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
    'itemScope', 'checked', 'multiple', 'muted', 'selected',
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

/** Convert a camel-cased string into a kebab-cased string. */
function kebab(camel: string): string {
    // This is only used for attribute names, so only check ASCII
    return camel.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
};

type JsxAttrs = {
    [K in Tag]: AttrsByTag[K] & {children?: Children};
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

declare global {
    namespace JSX {
        type Element = AnyElement;
        type ElementClass = never;
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }
        // data-* elements are special-cased by TypesScript to ignore in excess property checks, so
        // don't need to specify here
        type IntrinsicElements = JsxAttrs;
    }
}
