import * as React from "react";

// Examples - Modals maintain open/closed status, inputs maintain their values, etc...
class ControlledInput extends React.Component<any, any> {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value });
    // Make the component more reusable. If you pass your own onChange function
    // as a prop, you can extend the onChange event with custom behavior
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    const { onChange, value, ...rest } = this.props;
    return (
      <input value={this.state.value} onChange={this.handleChange} {...rest} />
    );
  }
}
