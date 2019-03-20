import * as React from "react";

// All JSX in React is syntactic sugar around `React.createElement`
const Content = props => {
  return (
    // Everything is the same as HTML attributes, except for `class`
    <div className="content">
      <div className="heading">
        <h1>My Site</h1>
        <span>My Header</span>
      </div>
      <section>
        {/* Props contains arguments passed to the component */}
        <h2>{props.title}</h2>
        {/* Children is a special prop, representing anything inside the component */}
        {props.children}
      </section>
      {/* Footer is the component, everything inside the footer tag is children */}
      <footer>
        This is a footer. <h1>With a BIG HEADER</h1>
      </footer>
    </div>
  );
};

export default Content