## JSX

JSX is the syntactic sugar that makes React look so much like HTML.

```js
const Header = props => <h1 id="unique-header">Test Header</h1>;
```

JSX components can be any normal HTML element OR any React component you've created/imported.

```js
const Page = props => <Header />;
```

Components can receive any HTML attributes, just like normal HTML. Custom components can also receive custom properties that you define, known as `props`. More on those in a moment.

### Reserved Words in JSX

`class` is a reserved word in Javascript, so the one component `prop` thats name has been changed between HTML and JSX is `class`.

Instead, JSX components use `className`