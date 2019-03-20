## Props and Children

Components are usually just functions, and they receive arguments called `props` that control their behavior.

A components `children` are a special prop, representing everything between the opening tag and closing tag of that component.

```js
const Content = props => {
  return <div>This text is children built into the component. The following represents children passed to this component from its parent: {props.children}</div>;
};

const MoreContent = props => {
    return <Content>These children are unaware of where they'll end up in the `Content` component.</Content>
}
```

### Class Components

Not all components are pure functions, some of them have `state` (more on that in a moment) or some custom functions attached to them.

In the class syntax, props are accessed through `this.props`, as we'll see shortly.