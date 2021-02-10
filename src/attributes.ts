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

import AriaAttributes from './aria';

interface HTMLAttributes extends AriaAttributes {
    // Standard HTML Attributes
    accesskey?: string;
    autocapitalize?: string;
    className?: string;
    'class'?: string;
    contenteditable?: boolean;
    contextmenu?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    id?: string;
    inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    is?: string;
    itemprop?: string;
    itemscope?: boolean;
    itemtype?: string;
    itemid?: string;
    itemref?: string;
    lang?: string;
    placeholder?: string;
    slot?: string;
    spellcheck?: boolean;
    style?: string;
    tabindex?: number;
    title?: string;

    // radioGroup?: string; // FO: did not find this anywhere

    // RDFa Attributes
    about?: string;
    datatype?: string;
    // inlist?: unknown; FO: I did not find this attribute on any of the RDFa docs
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;

    // Apple extensions/non-standard
    autocorrect?: string;
    autosave?: string;
    color?: string;
    results?: number;
    security?: string;
    unselectable?: 'on' | 'off';
}

interface AnchorHTMLAttributes extends HTMLAttributes {
    download?: string | true;
    href?: string;
    hreflang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerpolicy?: string;
}

// tslint:disable-next-line:no-empty-interface
interface AudioHTMLAttributes extends MediaHTMLAttributes {}

interface AreaHTMLAttributes extends HTMLAttributes {
    alt?: string;
    coords?: string;
    download?: string | true;
    href?: string;
    hreflang?: string;
    media?: string;
    rel?: string;
    shape?: string;
    target?: string;
}

interface BaseHTMLAttributes extends HTMLAttributes {
    href?: string;
    target?: string;
}

interface BlockquoteHTMLAttributes extends HTMLAttributes {
    cite?: string;
}

interface ButtonHTMLAttributes extends HTMLAttributes {
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: string;
    formnovalidate?: boolean;
    formtarget?: string;
    name?: string;
    type?: 'submit' | 'reset' | 'button';
    value?: string | string[] | number;
}

interface CanvasHTMLAttributes extends HTMLAttributes {
    height?: number | string;
    width?: number | string;
}

interface ColHTMLAttributes extends HTMLAttributes {
    span?: number;
    width?: number | string;
}

interface ColgroupHTMLAttributes extends HTMLAttributes {
    span?: number;
}

interface DataHTMLAttributes extends HTMLAttributes {
    value?: string | string[] | number;
}

interface DetailsHTMLAttributes extends HTMLAttributes {
    open?: boolean;
}

interface DelHTMLAttributes extends HTMLAttributes {
    cite?: string;
    datetime?: string;
}

interface DialogHTMLAttributes extends HTMLAttributes {
    open?: boolean;
}

interface EmbedHTMLAttributes extends HTMLAttributes {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
}

interface FieldsetHTMLAttributes extends HTMLAttributes {
    disabled?: boolean;
    form?: string;
    name?: string;
}

interface FormHTMLAttributes extends HTMLAttributes {
    acceptcharset?: string;
    action?: string;
    autocomplete?: string;
    enctype?: string;
    method?: string;
    name?: string;
    novalidate?: boolean;
    target?: string;
}

interface HtmlHTMLAttributes extends HTMLAttributes {
    manifest?: string;
}

interface IframeHTMLAttributes extends HTMLAttributes {
    allow?: string;
    allowfullscreen?: boolean;
    allowtransparency?: boolean;
    frameborder?: number | string;
    height?: number | string;
    marginheight?: number;
    marginwidth?: number;
    name?: string;
    referrerpolicy?: string;
    sandbox?: string;
    scrolling?: string;
    seamless?: boolean;
    src?: string;
    srcdoc?: string;
    width?: number | string;
}

interface ImgHTMLAttributes extends HTMLAttributes {
    alt?: string;
    crossorigin?: "anonymous" | "use-credentials" | "";
    decoding?: "async" | "auto" | "sync";
    height?: number | string;
    sizes?: string;
    src?: string;
    srcset?: string;
    usemap?: string;
    width?: number | string;
}

interface InsHTMLAttributes extends HTMLAttributes {
    cite?: string;
    datetime?: string;
}

interface InputHTMLAttributes extends HTMLAttributes {
    accept?: string;
    alt?: string;
    autocomplete?: string;
    autofocus?: boolean;
    capture?: boolean | string; // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
    checked?: boolean;
    crossorigin?: string;
    disabled?: boolean;
    form?: string;
    formaction?: string;
    formenctype?: string;
    formmethod?: string;
    formnovalidate?: boolean;
    formtarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxlength?: number;
    min?: number | string;
    minlength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | string[] | number;
    width?: number | string;
}

interface KeygenHTMLAttributes extends HTMLAttributes {
    autofocus?: boolean;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keytype?: string;
    keyparams?: string;
    name?: string;
}

interface LabelHTMLAttributes extends HTMLAttributes {
    form?: string;
    htmlfor?: string;
    'for'?: string;
}

interface LiHTMLAttributes extends HTMLAttributes {
    value?: string | string[] | number;
}

interface LinkHTMLAttributes extends HTMLAttributes {
    as?: string;
    crossorigin?: string;
    href?: string;
    hreflang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
}

interface MapHTMLAttributes extends HTMLAttributes {
    name?: string;
}

interface MenuHTMLAttributes extends HTMLAttributes {
    type?: string;
}

interface MediaHTMLAttributes extends HTMLAttributes {
    autoplay?: boolean;
    controls?: boolean;
    controlslist?: string;
    crossorigin?: string;
    loop?: boolean;
    mediagroup?: string;
    muted?: boolean;
    playsinline?: boolean;
    preload?: string;
    src?: string;
}

interface MetaHTMLAttributes extends HTMLAttributes {
    charset?: string;
    content?: string;
    httpequiv?: string;
    name?: string;
}

interface MeterHTMLAttributes extends HTMLAttributes {
    form?: string;
    high?: number;
    low?: number;
    max?: number | string;
    min?: number | string;
    optimum?: number;
    value?: string | string[] | number;
}

interface QuoteHTMLAttributes extends HTMLAttributes {
    cite?: string;
}

interface ObjectHTMLAttributes extends HTMLAttributes {
    classid?: string;
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    usemap?: string;
    width?: number | string;
    wmode?: string;
}

interface OlHTMLAttributes extends HTMLAttributes {
    reversed?: boolean;
    start?: number;
    type?: '1' | 'a' | 'a' | 'i' | 'i';
}

interface OptgroupHTMLAttributes extends HTMLAttributes {
    disabled?: boolean;
    label?: string;
}

interface OptionHTMLAttributes extends HTMLAttributes {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | string[] | number;
}

interface OutputHTMLAttributes extends HTMLAttributes {
    form?: string;
    htmlFor?: string;
    'for'?: string;
    name?: string;
}

interface ParamHTMLAttributes extends HTMLAttributes {
    name?: string;
    value?: string | string[] | number;
}

interface ProgressHTMLAttributes extends HTMLAttributes {
    max?: number | string;
    value?: string | string[] | number;
}

interface ScriptHTMLAttributes extends HTMLAttributes {
    async?: boolean;
    charset?: string;
    crossorigin?: string;
    defer?: boolean;
    integrity?: string;
    nomodule?: boolean;
    nonce?: string;
    src?: string;
    type?: string;
}

interface SelectHTMLAttributes extends HTMLAttributes {
    autocomplete?: string;
    autofocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | string[] | number;
}

interface SourceHTMLAttributes extends HTMLAttributes {
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
}

interface StyleHTMLAttributes extends HTMLAttributes {
    media?: string;
    nonce?: string;
    scoped?: boolean;
    type?: string;
}

interface TableHTMLAttributes extends HTMLAttributes {
    cellpadding?: number | string;
    cellspacing?: number | string;
    summary?: string;
}

interface TextareaHTMLAttributes extends HTMLAttributes {
    autocomplete?: string;
    autofocus?: boolean;
    cols?: number;
    dirname?: string;
    disabled?: boolean;
    form?: string;
    maxlength?: number;
    minlength?: number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | string[] | number;
    wrap?: string;
}

interface TdHTMLAttributes extends HTMLAttributes {
    align?: "left" | "center" | "right" | "justify" | "char";
    colspan?: number;
    headers?: string;
    rowspan?: number;
    scope?: string;
    valign?: "top" | "middle" | "bottom" | "baseline";
}

interface ThHTMLAttributes extends HTMLAttributes {
    align?: "left" | "center" | "right" | "justify" | "char";
    colspan?: number;
    headers?: string;
    rowspan?: number;
    scope?: string;
}

interface TimeHTMLAttributes extends HTMLAttributes {
    datetime?: string;
}

interface TrackHTMLAttributes extends HTMLAttributes {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srclang?: string;
}

interface VideoHTMLAttributes extends MediaHTMLAttributes {
    height?: number | string;
    playsinline?: boolean;
    poster?: string;
    width?: number | string;
}

interface WebViewHTMLAttributes extends HTMLAttributes {
    allowfullscreen?: boolean;
    allowpopups?: boolean;
    autofocus?: boolean;
    autosize?: boolean;
    blinkfeatures?: string;
    disableblinkfeatures?: string;
    disableguestresize?: boolean;
    disablewebsecurity?: boolean;
    guestinstance?: string;
    httpreferrer?: string;
    nodeintegration?: boolean;
    partition?: string;
    plugins?: boolean;
    preload?: string;
    src?: string;
    useragent?: string;
    webpreferences?: string;
}

type UseStandard = 'abbr' | 'address' | 'article' | 'aside' | 'b' | 'bdi' | 'bdo' | 'big' | 'body' | 'br'
    | 'caption' | 'cite' | 'code' | 'datalist' | 'dd' | 'dfn' | 'div' | 'dl' | 'dt' | 'em' | 'figcaption'
    | 'figure' | 'footer' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'head' | 'header' | 'hgroup' | 'hr'
    | 'i' | 'kbd' | 'legend' | 'main' | 'mark' | 'menuitem' | 'nav' | 'noscript' | 'p' | 'picture' | 'pre'
    | 'rp' | 'rt' | 'ruby' | 's' | 'samp' | 'section' | 'small' | 'span' | 'strong' | 'sub' | 'summary' |
    'sup' | 'tbody' | 'template' | 'tfoot' | 'thead' | 'title' | 'tr' | 'u' | 'ul' | 'var' | 'wbr';

type AttributesByTag = Record<UseStandard, HTMLAttributes> & {
    a: AnchorHTMLAttributes;
    area: AreaHTMLAttributes;
    audio: AudioHTMLAttributes;
    base: BaseHTMLAttributes;
    blockquote: BlockquoteHTMLAttributes;
    button: ButtonHTMLAttributes;
    canvas: CanvasHTMLAttributes;
    col: ColHTMLAttributes;
    colgroup: ColgroupHTMLAttributes;
    data: DataHTMLAttributes;
    del: DelHTMLAttributes;
    details: DetailsHTMLAttributes;
    dialog: DialogHTMLAttributes;
    embed: EmbedHTMLAttributes;
    fieldset: FieldsetHTMLAttributes;
    form: FormHTMLAttributes;
    html: HtmlHTMLAttributes;
    iframe: IframeHTMLAttributes;
    img: ImgHTMLAttributes;
    input: InputHTMLAttributes;
    ins: InsHTMLAttributes;
    keygen: KeygenHTMLAttributes;
    label: LabelHTMLAttributes;
    li: LiHTMLAttributes;
    link: LinkHTMLAttributes;
    map: MapHTMLAttributes;
    menu: MenuHTMLAttributes;
    meta: MetaHTMLAttributes;
    meter: MeterHTMLAttributes;
    object: ObjectHTMLAttributes;
    ol: OlHTMLAttributes;
    optgroup: OptgroupHTMLAttributes;
    option: OptionHTMLAttributes;
    output: OutputHTMLAttributes;
    param: ParamHTMLAttributes;
    progress: ProgressHTMLAttributes;
    q: QuoteHTMLAttributes;
    script: ScriptHTMLAttributes;
    select: SelectHTMLAttributes;
    source: SourceHTMLAttributes;
    style: StyleHTMLAttributes;
    table: TableHTMLAttributes;
    td: TdHTMLAttributes;
    textarea: TextareaHTMLAttributes;
    th: ThHTMLAttributes;
    time: TimeHTMLAttributes;
    track: TrackHTMLAttributes;
    video: VideoHTMLAttributes;
    webview: WebViewHTMLAttributes;
};

export default AttributesByTag;
