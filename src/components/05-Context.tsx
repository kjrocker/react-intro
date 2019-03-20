import * as React from "react";

const ThemeContext = React.createContext({
  name: "light",
  changeTheme: (str: string) => undefined
});

class ThemeProvider extends React.Component<any, any> {
  changeTheme = (str: string) => this.setState({ name: str });

  state = {
    name: "light",
    changeTheme: this.changeTheme
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemedComponent = props => {
  return (
    <ThemeContext.Consumer>
      {({ name }) => (
        <div style={{ color: name === "light" ? "black" : "white" }}>{this.props.children}</div>
      )}
    </ThemeContext.Consumer>
  );
};
