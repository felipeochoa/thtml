# thtml
Typesafe HTML template library

This library is designed for server-side HTML rendering using JSX. It does not suport custom
elements, suspense, etc. It only renders to strings, which you can send using your server.

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
    "jsx": "React",
    "jsxFactory": "h",
  }
}
```

Then make sure to `import { h } from 'thtml';` wherever you use JSX.

## Composition
Instead of custom elements, you can compose templates by using functions. E.g.:

```tsx
import { h, stringify } from 'thtml';

function hello(name: string) {
    return ['Hello, ', <b>{name}</b>, '!'];
}

console.log(stringify(
    <div>
      {hello('World')}
    </div>
));
```
