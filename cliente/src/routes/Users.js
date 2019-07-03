import React, { Component } from "react";
import Navbar from "../components/Navbar";
import CreateUser from "../components/CreateUser";

class Users extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <CreateUser />
      </div>
    );
  }
}

export default Users;