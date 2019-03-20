## State

Some components need more than props passed by their parent. They need to control their own destiny!

These components have `state`, which can be changed from _within_ the component.

This could be a modal's open/closed status, an input's value, or the results of an API call.

State is changed in a component using `this.setState()`, NOT CHANGED DIRECTLY. Except in the constructor, where `this.state = ...` is safe..

```js
class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...some initial state
        }
    }

    anotherMethod = () => {
        this.setState({...some other state})
    }

    VERY_BAD_METHOD = () => {
        this.state = undefined
    }
}
```

An alternative to a constructor:
```js
class Component extends React.Component {
    state = {
        ...some initial state
    }
}
```
