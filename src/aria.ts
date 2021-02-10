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

interface AriaAttributes {
    /** Define what an element is or does. E.g., navigation, complementary, banner, search, tabgroup, tab. */
    role?: string; // WAI-ARIA
    /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
    ariaActivedescendant?: string;
    /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the ariaRelevant attribute. */
    ariaAtomic?: boolean | 'false' | 'true';
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
     * presented if they are made.
     */
    ariaAutocomplete?: 'none' | 'inline' | 'list' | 'both';
    /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
    ariaBusy?: boolean | 'false' | 'true';
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see ariaPressed @see ariaSelected.
     */
    ariaChecked?: boolean | 'false' | 'mixed' | 'true';
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     * @see ariaColindex.
     */
    ariaColcount?: number;
    /**
     * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see ariaColcount @see ariaColspan.
     */
    ariaColindex?: number;
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see ariaColindex @see ariaRowspan.
     */
    ariaColspan?: number;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     * @see ariaOwns.
     */
    ariaControls?: string;
    /** Indicates the element that represents the current item within a container or set of related elements. */
    ariaCurrent?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
    /**
     * Identifies the element (or elements) that describes the object.
     * @see ariaLabelledby
     */
    ariaDescribedby?: string;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     * @see ariaDescribedby.
     */
    ariaDetails?: string;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see ariaHidden @see ariaReadonly.
     */
    ariaDisabled?: boolean | 'false' | 'true';
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop target.
     * @deprecated in ARIA 1.1
     */
    ariaDropeffect?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
    /**
     * Identifies the element that provides an error message for the object.
     * @see ariaInvalid @see ariaDescribedby.
     */
    ariaErrormessage?: string;
    /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
    ariaExpanded?: boolean | 'false' | 'true';
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
     * allows assistive technology to override the general default of reading in document source order.
     */
    ariaFlowto?: string;
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     * @deprecated in ARIA 1.1
     */
    ariaGrabbed?: boolean | 'false' | 'true';
    /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
    ariaHaspopup?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @see ariaDisabled.
     */
    ariaHidden?: boolean | 'false' | 'true';
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @see ariaErrormessage.
     */
    ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
    /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
    ariaKeyshortcuts?: string;
    /**
     * Defines a string value that labels the current element.
     * @see ariaLabelledby.
     */
    ariaLabel?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @see ariaDescribedby.
     */
    ariaLabelledby?: string;
    /** Defines the hierarchical level of an element within a structure. */
    ariaLevel?: number;
    /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
    ariaLive?: 'off' | 'assertive' | 'polite';
    /** Indicates whether an element is modal when displayed. */
    ariaModal?: boolean | 'false' | 'true';
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    ariaMultiline?: boolean | 'false' | 'true';
    /** Indicates that the user may select more than one item from the current selectable descendants. */
    ariaMultiselectable?: boolean | 'false' | 'true';
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    ariaOrientation?: 'horizontal' | 'vertical';
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
     * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     * @see ariaControls.
     */
    ariaOwns?: string;
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
     * A hint could be a sample value or a brief description of the expected format.
     */
    ariaPlaceholder?: string;
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see ariaSetsize.
     */
    ariaPosinset?: number;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see ariaChecked @see ariaSelected.
     */
    ariaPressed?: boolean | 'false' | 'mixed' | 'true';
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     * @see ariaDisabled.
     */
    ariaReadonly?: boolean | 'false' | 'true';
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see ariaAtomic.
     */
    ariaRelevant?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
    /** Indicates that user input is required on the element before a form may be submitted. */
    ariaRequired?: boolean | 'false' | 'true';
    /** Defines a human-readable, author-localized description for the role of an element. */
    ariaRoledescription?: string;
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     * @see ariaRowindex.
     */
    ariaRowcount?: number;
    /**
     * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
     * @see ariaRowcount @see ariaRowspan.
     */
    ariaRowindex?: number;
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see ariaRowindex @see ariaColspan.
     */
    ariaRowspan?: number;
    /**
     * Indicates the current "selected" state of various widgets.
     * @see ariaChecked @see ariaPressed.
     */
    ariaSelected?: boolean | 'false' | 'true';
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
     * @see ariaPosinset.
     */
    ariaSetsize?: number;
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    ariaSort?: 'none' | 'ascending' | 'descending' | 'other';
    /** Defines the maximum allowed value for a range widget. */
    ariaValuemax?: number;
    /** Defines the minimum allowed value for a range widget. */
    ariaValuemin?: number;
    /**
     * Defines the current value for a range widget.
     * @see ariaValuetext.
     */
    ariaValuenow?: number;
    /** Defines the human readable text alternative of ariaValuenow for a range widget. */
    ariaValuetext?: string;
}

export default AriaAttributes;
