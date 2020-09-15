import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import { GetUsers } from "../components/getUsers/GetUsers";

class Profile extends React.Component {
  
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        {/* <GetUsers /> */}
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
