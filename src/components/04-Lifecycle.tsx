import * as React from "react";

class CommonLifecycleExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Component is mounted in the DOM");
  }

  componentWillUnmount() {
    console.log("Component is about to unmount from the DOM");
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log("I determine if a change in props/state should trigger an update.")
      return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "Component updated. I have access to the before and after values for both state and props."
    );
  }

  render() {
      return <div id="common-lifecycle-example">{this.props.children}</div>
  }
}

class UncommonLifecycleExample extends React.Component<any, any> {
    static getDerivedStateFromProps(props, state) {
        console.log("When a certain value in state should be calculated based on props, I'm the function to use.")
        console.log("I'm a static method without access to `this.props` or `this.state`.")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("I am very rarely used, and can preserve some DOM information across updates (such as scroll position).")
        return null;
    }

    static getDerivedStateFromError(error) {
        console.log("I can use errors that occur in my children (and all my other descendants), to change the components state")
    }

    componentDidCatch(error, info) {
        console.log("I can handle errors in my descendants.")
    }

    render() {
        return <div id="common-lifecycle-example">{this.props.children}</div>
    }
}
