import 'jest';

import { h, stringify, stringifyChildren, Children, Fragment } from './index';

describe('stringifying', function() {
    it("stringifies void elements with no attributes", function() {
        const res = stringify(<br />);
        expect(res).toEqual(`<br>`);
    });

    it("stringifies void elements with attributes", function() {
        const res = stringify(<input type="text" />);
        expect(res).toEqual(`<input type="text">`);
    });

    it("stringifies non-void child-less elements with no attributes", function() {
        const res = stringify(<div />);
        expect(res).toEqual(`<div></div>`);
    });

    it("stringifies child-less elements with attributes", function() {
        const res = stringify(<div id="my-div" />);
        expect(res).toEqual(`<div id="my-div"></div>`);
    });

    it("stringifies elements with string children", function() {
        const res = stringify(<div>Hello, World!</div>);
        expect(res).toEqual(`<div>Hello, World!</div>`);
    });

    it("stringifies elements with numeric children", function() {
        const res = stringify(<div>Hello, {123}!</div>);
        expect(res).toEqual(`<div>Hello, 123!</div>`);
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

    it("stringifies style tags", function() {
        expect(stringify(<style/>)).toBe('<style></style>');
        expect(stringify(<style>p::before {'{ content: "<hi>"; }'}</style>))
            .toBe('<style>p::before { content: "<hi>"; }</style>');
        expect(stringify(<style>{'</style>XSS'}</style>)).toBe('<style><\\/style>XSS</style>');
        expect(stringify(<style>{'</script>XSS'}</style>)).toBe('<style></script>XSS</style>');
    });

    it("stringifies script tags", function() {
        expect(stringify(<script/>)).toBe('<script></script>');
        expect(stringify(<script>alert({'"<hi>")'}</script>)).toBe('<script>alert("<hi>")</script>');
        expect(stringify(<script>{'</'}script{'>XSS'}</script>)).toBe('<script><\\/script>XSS</script>');
        expect(stringify(<script>{'</script>XSS'}</script>)).toBe('<script><\\/script>XSS</script>');
    });

    it("errors for script/style tags with non-string children", function() {
        const child = (<div>X_X</div>) as any;
        expect(() => stringify(<style>{child}</style>)).toThrow();
        expect(() => stringify(<script>{child}</script>)).toThrow();
    });

    it("stringifies functional components", function() {
        function F(props: {a: string, b: string}) {
            return <div>a={props.a}; b={props.b}</div>;
        }
        const res = stringify(<F a="1" b="2"/>);
        expect(res).toBe('<div>a=1; b=2</div>');
    });

    it("stringifies functional components with children", function() {
        function F(props: {a: string, children?: Children}) {
            return <div>a={props.a}; children={stringifyChildren(props.children)}</div>;
        }
        expect(stringify(<F a="1"/>)).toBe('<div>a=1; children=</div>');
        expect(stringify(<F a="1"><b>123</b>456</F>)).toBe('<div>a=1; children=<b>123</b>456</div>');
    });

    it("stringifies functional components with children but no props", function() {
        function F(props: {children?: Children}) {
            return <div>children={stringifyChildren(props.children)}</div>;
        }
        expect(stringify(<F/>)).toBe('<div>children=</div>');
        expect(stringify(<F><b>123</b>456</F>)).toBe('<div>children=<b>123</b>456</div>');
    });

    it("stringifies functional components that return null/string", function() {
        function F(props: {ret: null | string}) {
            return props.ret;
        }
        expect(stringify(<F ret={null}/>)).toBe('');
        expect(stringify(<F ret={'<abc>'}/>)).toBe('&lt;abc&gt;');
    });

    it("stringifies Fragment children", function() {
        const res = stringify(<Fragment>abc</Fragment>);
        expect(res).toEqual('abc');
    });

    it("does not double-escape Fragment children", function() {
        const res = stringify(<Fragment><b>1</b><i>2</i></Fragment>);
        expect(res).toEqual('<b>1</b><i>2</i>');
    });
});

describe("attribute handling", function() {
    it("emits lower-cased attributes where needed", function() {
        const res = stringify(<div tabindex={1}>Hi</div>)
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
        const res = stringify(<div contenteditable={false} />);
        expect(res).toEqual(`<div contenteditable="false"></div>`);
    });

    it("stringifies boolean-valued attributes (true)", function() {
        const res = stringify(<div contenteditable={true} />);
        expect(res).toEqual(`<div contenteditable="true"></div>`);
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
