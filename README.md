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
P) => Children`. If you want to accept a `children` prop, you'll likely need to use
`stringifyChildren`.

## Special cases
* `script` and `style` tags can only have string children. These are escaped specially since the
  [content restrictions](https://html.spec.whatwg.org/multipage/syntax.html#cdata-rcdata-restrictions)
  are different
* [void elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) are not allowed
  to have any content

## Example

```tsx
import { h, stringify, stringifyChildren, AnyElement, Children, Fragment } from 'thtml';

function Greeter(props: {name: string}): AnyElement {
    return (
        <Fragment>
          Hello, <b>{props.name}</b>!
        </Fragment>
    );
}

function Diver(props: {children: Children}): AnyElement {
    return <div>{stringifyChildren(props.children)}</div>;
}

console.log(stringify(
    <Diver>
      <Greeter name='World'/>
    </Diver>
)); // <div>Hello, <b>World</b>!</div>
```
