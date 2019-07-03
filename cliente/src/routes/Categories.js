import React, { Component } from "react";
import Navbar from "../components/Navbar";
import CreateCategory from "../components/CreateCategory";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-xl-8 offset-2">
              <CreateCategory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
