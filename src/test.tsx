import 'jest';

import { h, stringify } from './index';

describe('stringifying', function() {
    it("stringifies void elements with no attributes", function() {
        const res = stringify(<br />);
        expect(res).toEqual(`<br>`);
    });

    it("stringifies void elements with attributes", function() {
        const res = stringify(<input type="text" />);
        expect(res).toEqual(`<input type="text">`);
    });

    it("stringifies child-less elements with no attributes", function() {
        const res = stringify(<div />);
        expect(res).toEqual(`<div/>`);
    });

    it("stringifies child-less elements with attributes", function() {
        const res = stringify(<div id="my-div" />);
        expect(res).toEqual(`<div id="my-div"/>`);
    });

    it("stringifies elements with string children", function() {
        const res = stringify(<div>Hello, World!</div>);
        expect(res).toEqual(`<div>Hello, World!</div>`);
    });

    it("stringifies elements with element children", function() {
        const res = stringify(
            <div>
              <b>Hello, World!</b>
            </div>
        );
        expect(res).toEqual(`<div><b>Hello, World!</b></div>`);
    });

    it("stringifies elements with array children", function() {
        const res = stringify(
            <div>
              Hello,
              <b> World</b>!
            </div>
        );
        expect(res).toEqual(`<div>Hello,<b> World</b>!</div>`);
    });

    it("elides null/undefined children", function() {
        const res = stringify(<div>a{null}b{undefined}c</div>);
        expect(res).toBe('<div>abc</div>');
    });
});

describe("attribute handling", function() {
    it("emits lower-cased attributes where needed", function() {
        const res = stringify(<div tabIndex={1}>Hi</div>)
        expect(res).toEqual(`<div tabindex="1">Hi</div>`);
    });

    it("emits kebab-cases attributes where needed", function() {
        const res = stringify(<div ariaDescribedby="other-elt" data-ix={123}>Hi!</div>)
        expect(res).toEqual(`<div aria-describedby="other-elt" data-ix="123">Hi!</div>`);
    });

    it("elides attributes set to null/undefined", function() {
        const res = stringify(
            <div ariaDescribedby={undefined} data-ix={null} className={undefined} id="xyz">Hi!</div>,
        );
        expect(res).toEqual(`<div id="xyz">Hi!</div>`);
        const res2 = stringify(
            <div ariaDescribedby={undefined} data-ix={null} className={undefined}>Hi!</div>,
        );
        expect(res2).toEqual(`<div>Hi!</div>`);
    });

    it("elides boolean attributes set to false", function() {
        const res = stringify(<input type="radio" checked={false} />);
        expect(res).toEqual(`<input type="radio">`);
    });

    it("emits boolean attributes set to true as the empty string", function() {
        const res = stringify(<input type="radio" checked />);
        expect(res).toEqual(`<input type="radio" checked="">`);
    });

    it("stringifies number-valued attributes", function() {
        const res = stringify(<input type="number" step={5} />);
        expect(res).toEqual(`<input type="number" step="5">`);
    });

    it("stringifies boolean-valued attributes (false)", function() {
        const res = stringify(<div contentEditable={false} />);
        expect(res).toEqual(`<div contenteditable="false"/>`);
    });

    it("stringifies boolean-valued attributes (true)", function() {
        const res = stringify(<div contentEditable={true} />);
        expect(res).toEqual(`<div contenteditable="true"/>`);
    });
});

describe("escaping", function() {
    it("escapes string children", function() {
        const res = stringify(<div>{'<script>alert("oops")</script>'}</div>);
        expect(res).toEqual(`<div>&lt;script&gt;alert(&quot;oops&quot;)&lt;/script&gt;</div>`);
    });

    it("escapes string attributes", function() {
        const value = `"'><script>alert("oops")</script>`;
        const res = stringify(<input type="text" value={value} />);
        expect(res).toEqual(`<input type="text" value="&quot;&#39;&gt;&lt;script&gt;alert(&quot;oops&quot;)&lt;/script&gt;">`);
    });
});
