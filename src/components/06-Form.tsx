import * as React from "react";

const isValid = ({ firstName, lastName, favoriteFood }) =>
  firstName && lastName && favoriteFood;

const getErrors = ({ firstName, lastName, favoriteFood }) => {
  const errors: any = {};
  if (!firstName) errors.firstName = "First name is required!";
  if (!lastName) errors.lastName = "Last name is required!";
  if (!favoriteFood)
    errors.favoriteFood =
      "Favorite food is required! Because we're a quirky site like that.";
  return errors;
};

class RegisterForm extends React.Component<any, any> {
  static getDerivedStateFromProps(props, state) {
    return {
      valid: isValid(state.values),
      errors: getErrors(state.values)
    };
  }

  state = {
    values: {
      firstName: "",
      lastName: "",
      favoriteFood: ""
    },
    touched: {
      firstName: false,
      lastName: false,
      favoriteFood: false
    },
    errors: {
      firstName: undefined,
      lastName: undefined,
      favoriteFood: undefined
    },
    valid: true
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.values);
  };

  handleChange = (field: string) => e => {
    if (this.state.touched[field] === false) {
      this.setState({ touched: { ...this.state.touched, [field]: true } });
    }
    this.setState({
      values: { ...this.state.values, [field]: e.currentTarget.value }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={this.state.values.firstName}
            onChange={this.handleChange("firstName")}
          />
          {!this.state.valid && this.state.touched.firstName && this.state.errors.firstName
            ? this.state.errors.firstName
            : null}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={this.state.values.lastName}
            onChange={this.handleChange("lastName")}
          />
          {!this.state.valid && this.state.touched.lastName && this.state.errors.lastName
            ? this.state.errors.lastName
            : null}
        </div>
        <div>
          <input
            type="text"
            name="favoriteFood"
            value={this.state.values.favoriteFood}
            onChange={this.handleChange("favoriteFood")}
          />
          {!this.state.valid && this.state.touched.favoriteFood && this.state.errors.favoriteFood
            ? this.state.errors.favoriteFood
            : null}
        </div>
        <button type="submit" disabled={!this.state.valid}>
          Submit
        </button>
      </form>
    );
  }
}
