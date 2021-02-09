// These types were adapted from the DefinitelyTyped React 16.8 typings.
/**!
 * This project is licensed under the MIT license.
 * Copyrights are respective of each contributor listed at the beginning of each definition file.
 *
 *     Asana <https://asana.com>
 *     AssureSign <http://www.assuresign.com>
 *     Microsoft <https://microsoft.com>
 *     John Reilly <https://github.com/johnnyreilly>
 *     Benoit Benezech <https://github.com/bbenezech>
 *     Patricio Zavolinsky <https://github.com/pzavolinsky>
 *     Digiguru <https://github.com/digiguru>
 *     Eric Anderson <https://github.com/ericanderson>
 *     Dovydas Navickas <https://github.com/DovydasNavickas>
 *     Stéphane Goetz <https://github.com/onigoetz>
 *     Josh Rutherford <https://github.com/theruther4d>
 *     Guilherme Hübner <https://github.com/guilhermehubner>
 *     Ferdy Budhidharma <https://github.com/ferdaber>
 *     Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
 *     Olivier Pascal <https://github.com/pascaloliv>
 *     Martin Hochel <https://github.com/hotell>
 *     Frank Li <https://github.com/franklixuefei>
 *     Jessica Franco <https://github.com/Jessidhia>
 *     Saransh Kataria <https://github.com/saranshkataria>
 *     Kanitkorn Sujautra <https://github.com/lukyth>
 *     Sebastian Silbermann <https://github.com/eps1lon>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import AriaAttributes from "./aria";
import HTMLAttrs from './attributes';

interface SvgAll {
    // Attributes shared with HTML
    'class': string;
    className: string;
    color: string;
    height: number | string;
    id: string;
    lang: string;
    max: number | string;
    media: string;
    method: string;
    min: number | string;
    name: string;
    style: string;
    target: string;
    type: string;
    width: number | string;

    // Other HTML properties supported by SVG elements in browsers
    role: string;
    tabindex: number;
    crossorigin: "anonymous" | "use-credentials" | "";

    // HTML properties cross-referenced
    htmlADownload: HTMLAttrs['a']['download'];
    htmlAHreflang: HTMLAttrs['a']['hreflang'];
    htmlAPing: HTMLAttrs['a']['ping'];
    htmlAReferrerpolicy: HTMLAttrs['a']['referrerpolicy'];
    htmlARel: HTMLAttrs['a']['rel'];
    htmlAType: HTMLAttrs['a']['type'];
    htmlScriptCrossorigin: HTMLAttrs['script']['crossorigin'];

    // All posisble SVG-specific attributes
    accentHeight: number | string;
    accumulate: "none" | "sum";
    additive: "replace" | "sum";
    alignmentBaseline: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
    allowReorder: "no" | "yes";
    alphabetic: number | string;
    amplitude: number | string;
    arabicForm: "initial" | "medial" | "terminal" | "isolated";
    ascent: number | string;
    attributeName: string;
    attributeType: string;
    autoReverse: boolean;
    azimuth: number | string;
    baseFrequency: number | string;
    baselineShift: number | string;
    baseProfile: number | string;
    bbox: number | string;
    begin: number | string;
    bias: number | string;
    by: number | string;
    calcMode: number | string;
    capHeight: number | string;
    clip: number | string;
    clipPath: string;
    clipPathUnits: number | string;
    clipRule: number | string;
    colorInterpolation: number | string;
    colorInterpolationFilters: "auto" | "sRGB" | "linearRGB" | "inherit";
    colorProfile: number | string;
    colorRendering: number | string;
    contentScriptType: number | string;
    contentStyleType: number | string;
    cursor: number | string;
    cx: number | string;
    cy: number | string;
    d: string;
    decelerate: number | string;
    descent: number | string;
    diffuseConstant: number | string;
    direction: number | string;
    display: number | string;
    divisor: number | string;
    dominantBaseline: number | string;
    dur: number | string;
    dx: number | string;
    dy: number | string;
    edgeMode: number | string;
    elevation: number | string;
    enableBackground: number | string;
    end: number | string;
    exponent: number | string;
    externalResourcesRequired: boolean;
    fill: string;
    fillOpacity: number | string;
    fillRule: "nonzero" | "evenodd" | "inherit";
    filter: string;
    filterRes: number | string;
    filterUnits: number | string;
    floodColor: number | string;
    floodOpacity: number | string;
    focusable: boolean | "auto";
    fontFamily: string;
    fontSize: number | string;
    fontSizeAdjust: number | string;
    fontStretch: number | string;
    fontStyle: number | string;
    fontVariant: number | string;
    fontWeight: number | string;
    format: number | string;
    from: number | string;
    fr: number | string;
    fx: number | string;
    fy: number | string;
    g1: number | string;
    g2: number | string;
    glyphName: number | string;
    glyphOrientationHorizontal: number | string;
    glyphOrientationVertical: number | string;
    glyphRef: number | string;
    gradientTransform: string;
    gradientUnits: string;
    hanging: number | string;
    hatchContentUnits: string;  // TODO: what's the right type?
    hatchUnits: string;         // TODO: what's the right type?
    horizAdvX: number | string;
    horizOriginX: number | string;
    horizOriginY: number | string;
    href: string;
    ideographic: number | string;
    imageRendering: number | string;
    in2: number | string;
    in: string;
    intercept: number | string;
    k1: number | string;
    k2: number | string;
    k3: number | string;
    k4: number | string;
    k: number | string;
    kernelMatrix: number | string;
    kernelUnitLength: number | string;
    kerning: number | string;
    keyPoints: number | string;
    keySplines: number | string;
    keyTimes: number | string;
    lengthAdjust: number | string;
    letterSpacing: number | string;
    lightingColor: number | string;
    limitingConeAngle: number | string;
    local: number | string;
    markerEnd: string;
    markerHeight: number | string;
    markerMid: string;
    markerStart: string;
    markerUnits: number | string;
    markerWidth: number | string;
    mask: string;
    maskContentUnits: number | string;
    maskUnits: number | string;
    mathematical: number | string;
    mode: number | string;
    numOctaves: number | string;
    offset: number | string;
    opacity: number | string;
    operator: number | string;
    order: number | string;
    orient: number | string;
    orientation: number | string;
    origin: number | string;
    overflow: number | string;
    overlinePosition: number | string;
    overlineThickness: number | string;
    paintOrder: number | string;
    panose1: number | string;
    path: string;
    pathLength: number | string;
    patternContentUnits: string;
    patternTransform: number | string;
    patternUnits: string;
    pitch: string;              // TODO: What's the right type?
    pointerEvents: number | string;
    points: string;
    pointsAtX: number | string;
    pointsAtY: number | string;
    pointsAtZ: number | string;
    preserveAlpha: boolean;
    preserveAspectRatio: string;
    primitiveUnits: number | string;
    r: number | string;
    radius: number | string;
    refX: number | string;
    refY: number | string;
    renderingIntent: number | string;
    repeatCount: number | string;
    repeatDur: number | string;
    requiredExtensions: number | string;
    requiredFeatures: number | string;
    restart: number | string;
    result: string;
    rotate: number | string;
    rx: number | string;
    ry: number | string;
    scale: number | string;
    seed: number | string;
    shapeRendering: number | string;
    side: 'left' | 'right';
    slope: number | string;
    spacing: number | string;
    specularConstant: number | string;
    specularExponent: number | string;
    speed: number | string;
    spreadMethod: string;
    startOffset: number | string;
    stdDeviation: number | string;
    stemh: number | string;
    stemv: number | string;
    stitchTiles: number | string;
    stopColor: string;
    stopOpacity: number | string;
    strikethroughPosition: number | string;
    strikethroughThickness: number | string;
    string: number | string;
    stroke: string;
    strokeDasharray: string | number;
    strokeDashoffset: string | number;
    strokeLinecap: "butt" | "round" | "square" | "inherit";
    strokeLinejoin: "miter" | "round" | "bevel" | "inherit";
    strokeMiterlimit: number | string;
    strokeOpacity: number | string;
    strokeWidth: number | string;
    surfaceScale: number | string;
    systemLanguage: number | string;
    tableValues: number | string;
    targetX: number | string;
    targetY: number | string;
    textAnchor: string;
    textDecoration: number | string;
    textLength: number | string;
    textRendering: number | string;
    title: string;
    to: number | string;
    transform: string;
    transformOrigin: string;
    u1: number | string;
    u2: number | string;
    underlinePosition: number | string;
    underlineThickness: number | string;
    unicode: number | string;
    unicodeBidi: number | string;
    unicodeRange: number | string;
    unitsPerEm: number | string;
    vAlphabetic: number | string;
    values: string;
    vectorEffect: number | string;
    version: string;
    vertAdvY: number | string;
    vertOriginX: number | string;
    vertOriginY: number | string;
    vHanging: number | string;
    vIdeographic: number | string;
    viewBox: string;
    viewTarget: number | string;
    visibility: number | string;
    vMathematical: number | string;
    widths: number | string;
    wordSpacing: number | string;
    writingMode: number | string;
    x1: number | string;
    x2: number | string;
    x: number | string;
    xChannelSelector: string;
    xHeight: number | string;
    xlinkActuate: string;
    xlinkArcrole: string;
    xlinkHref: string;
    xlinkRole: string;
    xlinkShow: string;
    xlinkTitle: string;
    xlinkType: string;
    xmlBase: string;
    xmlLang: string;
    xmlns: string;
    xmlnsXlink: string;
    xmlSpace: string;
    y1: number | string;
    y2: number | string;
    y: number | string;
    yChannelSelector: string;
    z: number | string;
    zoomAndPan: string;
}

export type SvgCore = 'id' | 'lang' | 'tabindex' | 'xmlBase' | 'xmlLang' | 'xmlSpace';
export type SvgStyling = 'class' | 'className' | 'style';
export type SvgConditionalProcessing =
    'externalResourcesRequired' | 'requiredExtensions' | 'requiredFeatures' | 'systemLanguage';

export type SvgXlink = 'xlinkHref' | 'xlinkType' | 'xlinkRole' | 'xlinkArcrole' | 'xlinkTitle' | 'xlinkShow' | 'xlinkActuate';
export type SvgPresentation =
    'alignmentBaseline' | 'baselineShift' | 'clip' | 'clipPath' | 'clipRule' | 'color' | 'colorInterpolation'
    | 'colorInterpolationFilters' | 'colorProfile' | 'colorRendering' | 'cursor' | 'direction' | 'display'
    | 'dominantBaseline' | 'enableBackground' | 'fill' | 'fillOpacity' | 'fillRule' | 'filter' | 'floodColor'
    | 'floodOpacity' | 'fontFamily' | 'fontSize' | 'fontSizeAdjust' | 'fontStretch' | 'fontStyle'
    | 'fontVariant' | 'fontWeight' | 'glyphOrientationHorizontal' | 'glyphOrientationVertical'
    | 'imageRendering' | 'kerning' | 'letterSpacing' | 'lightingColor' | 'markerEnd' | 'markerMid'
    | 'markerStart' | 'mask' | 'opacity' | 'overflow' | 'pointerEvents' | 'shapeRendering' | 'stopColor'
    | 'stopOpacity' | 'stroke' | 'strokeDasharray' | 'strokeDashoffset' | 'strokeLinecap' | 'strokeLinejoin'
    | 'strokeMiterlimit' | 'strokeOpacity' | 'strokeWidth' | 'textAnchor' | 'textDecoration' | 'textRendering'
    | 'transform' | 'transformOrigin' | 'unicodeBidi' | 'vectorEffect' | 'visibility' | 'wordSpacing'
    | 'writingMode';
export type SvgFilterPrimitive = 'height' | 'result' | 'width' | 'x' | 'y';
export type SvgTransferFunction =
    'type' | 'tableValues' | 'slope' | 'intercept' | 'amplitude' | 'exponent' | 'offset';
export type SvgAnimationTargetElement = 'href';
export type SvgAnimationAttributeTarget = 'attributeType' | 'attributeName';
export type SvgAnimationTiming =
    'begin' | 'dur' | 'end' | 'min' | 'max' | 'restart'
    | 'repeatCount' | 'repeatDur' | 'fill';
export type SvgAnimationValue =
    'calcMode' | 'values' | 'keyTimes' | 'keySplines' | 'from' | 'to'
    | 'by' | 'autoReverse' | 'decelerate'; // | 'accelerate' -- not in React, and MDN doesn't have a page for it
type SvgAnimationAddition = 'additive' | 'accumulate';
type SvgEvent = never;
type SvgGlobalEvent = never;
type SvgAnimationEvent = never;
type SvgGraphicalEvent = never;
type SvgAria = never;

type SvgAttrNames = {
    a: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'href' | 'htmlADownload' | 'htmlAHreflang' | 'htmlAPing' | 'htmlAReferrerpolicy' | 'htmlARel' | 'htmlAType' | 'target' | 'xlinkHref',
    altglyph: SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'dx' | 'dy' | 'format' | 'glyphRef' | 'rotate' | 'x' | 'xlinkHref' | 'y',
    altglyphdef: SvgCore,
    altglyphitem: SvgCore,
    animate: SvgCore | SvgEvent | SvgStyling,
    animatecolor: 'externalResourcesRequired' | SvgAnimationAddition | SvgAnimationAttributeTarget | SvgAnimationEvent | SvgAnimationTiming | SvgAnimationValue | SvgConditionalProcessing | SvgCore | SvgXlink | 'by' | 'from' | 'to',
    animatemotion: SvgCore | SvgEvent | SvgStyling | 'keyPoints' | 'path' | 'rotate',
    animatetransform: 'externalResourcesRequired' | SvgAnimationAddition | SvgAnimationAttributeTarget | SvgAnimationEvent | SvgAnimationTiming | SvgAnimationValue | SvgConditionalProcessing | SvgCore | SvgXlink | 'by' | 'from' | 'to' | 'type',
    circle: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'cx' | 'cy' | 'pathLength' | 'r',
    clippath: SvgConditionalProcessing | SvgCore | SvgPresentation | SvgStyling | 'clipPathUnits',
    'color-profile': SvgCore | SvgXlink | 'local' | 'name' | 'renderingIntent' | 'xlinkHref',
    cursor: 'externalResourcesRequired' | SvgConditionalProcessing | SvgCore | SvgXlink | 'x' | 'xlinkHref' | 'y',
    defs: SvgCore | SvgEvent | SvgPresentation | SvgStyling,
    desc: SvgCore | SvgEvent | SvgStyling,
    discard: SvgAria | SvgConditionalProcessing | SvgCore | 'begin' | 'href',
    ellipse: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'cx' | 'cy' | 'pathLength' | 'rx' | 'ry',
    feblend: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'in2' | 'mode',
    fecolormatrix: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'type' | 'values',
    fecomponenttransfer: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in',
    fecomposite: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'in2' | 'k1' | 'k2' | 'k3' | 'k4' | 'operator',
    feconvolvematrix: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'bias' | 'divisor' | 'edgeMode' | 'in' | 'kernelMatrix' | 'kernelUnitLength' | 'order' | 'preserveAlpha' | 'targetX' | 'targetY',
    fediffuselighting: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'diffuseConstant' | 'in' | 'kernelUnitLength' | 'surfaceScale',
    fedisplacementmap: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'in2' | 'scale' | 'xChannelSelector' | 'yChannelSelector',
    fedistantlight: SvgCore | 'azimuth' | 'elevation',
    fedropshadow: SvgCore | SvgFilterPrimitive | SvgPresentation | SvgStyling | 'dx' | 'dy' | 'stdDeviation',
    feflood: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'floodColor' | 'floodOpacity',
    fefunca: SvgCore | SvgTransferFunction,
    fefuncb: SvgCore | SvgTransferFunction,
    fefuncg: SvgCore | SvgTransferFunction,
    fefuncr: SvgCore | SvgTransferFunction,
    fegaussianblur: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'edgeMode' | 'in' | 'stdDeviation',
    feimage: 'className' | 'externalResourcesRequired' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | SvgXlink | 'preserveAspectRatio' | 'xlinkHref',
    femerge: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation,
    femergenode: SvgCore | 'in',
    femorphology: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'operator' | 'radius',
    feoffset: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'dx' | 'dy' | 'in',
    fepointlight: SvgCore | 'x' | 'y' | 'z',
    fespecularlighting: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in' | 'kernelUnitLength' | 'specularConstant' | 'specularExponent' | 'surfaceScale',
    fespotlight: SvgCore | 'limitingConeAngle' | 'pointsAtX' | 'pointsAtY' | 'pointsAtZ' | 'specularExponent' | 'x' | 'y' | 'z',
    fetile: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'in',
    feturbulence: 'className' | 'style' | SvgCore | SvgFilterPrimitive | SvgPresentation | 'baseFrequency' | 'numOctaves' | 'seed' | 'stitchTiles' | 'type',
    filter: 'className' | 'externalResourcesRequired' | 'style' | SvgCore | SvgPresentation | SvgXlink | 'filterRes' | 'filterUnits' | 'height' | 'primitiveUnits' | 'width' | 'x' | 'xlinkHref' | 'y',
    font: 'className' | 'externalResourcesRequired' | 'style' | SvgCore | SvgPresentation | 'horizAdvX' | 'horizOriginX' | 'horizOriginY' | 'vertAdvY' | 'vertOriginX' | 'vertOriginY',
    'font-face': SvgCore | 'accentHeight' | 'alphabetic' | 'ascent' | 'bbox' | 'capHeight' | 'descent' | 'fontFamily' | 'fontSize' | 'fontStretch' | 'fontStyle' | 'fontVariant' | 'fontWeight' | 'hanging' | 'ideographic' | 'mathematical' | 'overlinePosition' | 'overlineThickness' | 'panose1' | 'slope' | 'stemh' | 'stemv' | 'strikethroughPosition' | 'strikethroughThickness' | 'underlinePosition' | 'underlineThickness' | 'unicodeRange' | 'unitsPerEm' | 'vAlphabetic' | 'vHanging' | 'vIdeographic' | 'vMathematical' | 'widths' | 'xHeight',
    'font-face-format': SvgCore | 'string',
    'font-face-name': SvgCore | 'name',
    'font-face-src': SvgCore,
    'font-face-uri': SvgCore | SvgXlink | 'xlinkHref',
    foreignobject: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'height' | 'width' | 'x' | 'y',
    g: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling,
    glyph: 'className' | 'style' | SvgCore | SvgPresentation | 'arabicForm' | 'd' | 'glyphName' | 'horizAdvX' | 'lang' | 'orientation' | 'unicode' | 'vertAdvY' | 'vertOriginX' | 'vertOriginY',
    glyphref: 'className' | 'style' | SvgCore | SvgPresentation | SvgXlink | 'dx' | 'dy' | 'format' | 'glyphRef' | 'x' | 'xlinkHref' | 'y',
    hatch: SvgCore | SvgGlobalEvent | SvgPresentation | SvgStyling | 'hatchContentUnits' | 'hatchUnits' | 'href' | 'pitch' | 'rotate' | 'transform' | 'x' | 'y',
    hatchpath: SvgCore | SvgGlobalEvent | SvgPresentation | SvgStyling | 'd' | 'offset',
    hkern: SvgCore | 'g1' | 'g2' | 'k' | 'u1' | 'u2',
    image: 'className' | 'externalResourcesRequired' | 'style' | 'transform' | SvgConditionalProcessing | SvgCore | SvgGraphicalEvent | SvgPresentation | SvgXlink | 'height' | 'href' | 'preserveAspectRatio' | 'width' | 'x' | 'y',
    line: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'pathLength' | 'x1' | 'x2' | 'y1' | 'y2',
    lineargradient: SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'gradientTransform' | 'gradientUnits' | 'href' | 'spreadMethod' | 'x1' | 'x2' | 'xlinkHref' | 'y1' | 'y2',
    marker: SvgAria | SvgConditionalProcessing | SvgCore | SvgPresentation | SvgStyling | 'markerHeight' | 'markerUnits' | 'markerWidth' | 'orient' | 'preserveAspectRatio' | 'refX' | 'refY' | 'viewBox',
    mask: SvgConditionalProcessing | SvgCore | SvgPresentation | SvgStyling | 'height' | 'maskContentUnits' | 'maskUnits' | 'width' | 'x' | 'y',
    metadata: SvgCore | SvgGlobalEvent,
    'missing-glyph': 'className' | 'style' | SvgCore | SvgPresentation | 'd' | 'horizAdvX' | 'vertAdvY' | 'vertOriginX' | 'vertOriginY',
    mpath: 'externalResourcesRequired' | SvgCore | SvgXlink | 'xlinkHref',
    path: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'd' | 'pathLength',
    pattern: SvgConditionalProcessing | SvgCore | SvgPresentation | SvgStyling | SvgXlink | 'height' | 'href' | 'patternContentUnits' | 'patternTransform' | 'patternUnits' | 'preserveAspectRatio' | 'viewBox' | 'width' | 'x' | 'xlinkHref' | 'y',
    polygon: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'pathLength' | 'points',
    polyline: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'pathLength' | 'points',
    radialgradient: SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'cx' | 'cy' | 'fr' | 'fx' | 'fy' | 'gradientTransform' | 'gradientUnits' | 'href' | 'r' | 'spreadMethod' | 'xlinkHref',
    rect: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'height' | 'pathLength' | 'rx' | 'ry' | 'width' | 'x' | 'y',
    script: SvgCore | SvgEvent | SvgStyling | 'href' | 'htmlScriptCrossorigin' | 'type' | 'xlinkHref',
    set: SvgCore | SvgEvent | SvgStyling | 'to',
    solidcolor: SvgCore | SvgGlobalEvent | SvgPresentation | SvgStyling,
    stop: SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'offset' | 'stopColor' | 'stopOpacity',
    style: SvgCore | SvgEvent | SvgStyling | 'media' | 'title' | 'type',
    svg: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'baseProfile' | 'contentScriptType' | 'contentStyleType' | 'height' | 'preserveAspectRatio' | 'version' | 'viewBox' | 'width' | 'x' | 'y',
    switch: 'className' | 'externalResourcesRequired' | 'style' | 'transform' | SvgConditionalProcessing | SvgCore | SvgGraphicalEvent | SvgPresentation,
    symbol: SvgAria | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'height' | 'preserveAspectRatio' | 'refX' | 'refY' | 'viewBox' | 'width' | 'x' | 'y',
    text: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'dx' | 'dy' | 'lengthAdjust' | 'rotate' | 'textLength' | 'x' | 'y',
    textpath: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'href' | 'lengthAdjust' | 'method' | 'path' | 'side' | 'spacing' | 'startOffset' | 'textLength',
    title: SvgCore | SvgEvent | SvgStyling,
    tref: 'className' | 'externalResourcesRequired' | 'style' | SvgConditionalProcessing | SvgCore | SvgGraphicalEvent | SvgPresentation | SvgXlink | 'xlinkHref',
    tspan: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | 'dx' | 'dy' | 'lengthAdjust' | 'rotate' | 'textLength' | 'x' | 'y',
    use: SvgAria | SvgConditionalProcessing | SvgCore | SvgEvent | SvgPresentation | SvgStyling | SvgXlink | 'height' | 'href' | 'width' | 'x' | 'xlinkHref' | 'y',
    view: 'externalResourcesRequired' | SvgAria | SvgCore | SvgGlobalEvent | 'preserveAspectRatio' | 'viewBox' | 'viewTarget' | 'zoomAndPan',
    vkern: SvgCore | 'g1' | 'g2' | 'k' | 'u1' | 'u2',
};

type Svg<K extends keyof SvgAll> = Partial<Pick<SvgAll, K>>;

type SvgAttrs = {[K in keyof SvgAttrNames]: Svg<SvgAttrNames[K]> & AriaAttributes};

export default SvgAttrs;
