import * as React from "react";

// Use the user prop to display some specific information
// Pass the rest of the props down to the next component
const User = ({ user, ...rest }) => {
  return (
    <span {...rest}>
      {user.firstName} {user.lastName}
    </span>
  );
};

const UserSection = props => {
  return (
    //  We still have basic HTML attributes because the props get passed through above
    <User
      user={{ firstName: "Kevin", lastName: "Rocker" }}
      className="user-name"
      onClick={e => console.log(e)}
    />
  );
};

export { UserSection, User };
