# thtml
Typesafe HTML template library

This library is designed for server-side HTML rendering using JSX. It does not suport effects,
suspense, etc. It only renders to strings, which you can send using your server.

The main plus of using this library is that it incoporates rich type information for HTML elements,
so you get good autocomplete and typechecking on your templates.

It exports an `h` function, and a `stringify` function. You use them in concert like this:

```tsx
import { h, stringify} from 'thtml';

const val = stringify(
    <div>
      <b>Hello, World!</b>
    </div>
);

console.log(val);
```

## Config

You need to instruct TypesScript to use `h` instead of `React.createElement` when transpiling the
JSX:

```json
{
  "compilerOptions": {
    // ...
    "jsx": "react",
    "jsxFactory": "h",
  }
}
```

Then make sure to `import { h } from 'thtml';` wherever you use JSX.

## Composition
You can create functional elements like in React. These should be pure functions of type `<P>(props:
P) => Children`. If you want to accept a `children` prop, you may need to use
`stringifyChildren`.

## Special cases
* `script` and `style` tags can only have string children. These are escaped specially since the
  [content restrictions](https://html.spec.whatwg.org/multipage/syntax.html#cdata-rcdata-restrictions)
  are different
* [void elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) are not allowed
  to have any content
* Most attributes should be spelled out in lower-case, like in HTML. This library supports the
  React-isms `className` (translated to `class`) and `htmlFor` (translated to `for`).
* SVG attributes should be written out in camelCase. `thtml` will automatically output camel or
  kebab case as appropriate (e.g. `viewBox` vs. `font-family`)
* SVG attributes requiring namespacing should also be camelCased. E.g., for `xml:lang`, use
  `xmlLang`, and for `xlink:href` use `xlinkHref`

## Example

```tsx
import { h, stringify, Children, Fragment } from 'thtml';

function Greeter(props: {name: string}): JSX.Element {
    return (
        <Fragment>
          Hello, <b>{props.name}</b>!
        </Fragment>
    );
}

function Diver(props: {children: Children}): JSX.Element {
    return <div>{props.children}</div>;
}

console.log(stringify(
    <Diver>
      <Greeter name='World'/>
    </Diver>
)); // <div>Hello, <b>World</b>!</div>
```
