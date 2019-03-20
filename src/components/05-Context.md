## Context

Beyond state and props, there is only context.

Context is the third and final way components can share information, and was only officially released as a React feature about a year ago.

Before that, the API did exist, but it was clunky and terrible and not officially supported as a consumer-facing React API. Those were dark times.

### But Why?

Sometimes you have information that you want to set up near the top of the component tree.

For example, the currently logged in user, or the website theme, or some globally accessible API results.

However, you probably only _need_ that information much further down the tree.

Displaying the username, launching an API call with the authentication token, deciding the color of text based on theme, etc.

Without context, every single component through the entire app would need accept this information, and pass it along to its children. Just so information state from the top of the tree is accessible near the bottom.

UNACCEPTABLE!

### Step 1 - Creating Context

```js
const UserContext = React.createContext({
  username: "billybob",
  token: "A25PGYFPY5452E"
});
```

### Step 2 - Providing Context

One of the high-level, all-encompassing components of the application:

```js
const TheWholeApp = props => {
    return (
        <UserContext.Provider value={....}>
            <TheActualApp/>
        </UserContext.Provider>
    )
}
```

### Step 3 - Consuming Context

An important thing to note is that yes, inline functions can be children of a React component.

```js
const UsernameHeader = props => {
    return (
        <UserContext.Consumer>
            {(value) => <h1>{value.username}</h1>}
        </UserContext.Consumer>
    )
}
```
