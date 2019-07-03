import React, { Component } from "react";
import Navbar from "../components/Navbar";
import CreateCategory from "../components/CreateCategory";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <CreateCategory />
      </div>
    );
  }
}

export default Categories;
