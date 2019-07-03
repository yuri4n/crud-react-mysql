import React, { Component } from "react";
import Navbar from "../components/Navbar";
import CreateUser from "../components/CreateUser";

class Users extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-8 offset-2">
              <CreateUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;