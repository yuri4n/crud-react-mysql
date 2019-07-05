import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ShowCategories from "../components/ShowCategories";
import ShowUsers from "../components/ShowUsers";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-xl-3">
              <ShowCategories />
            </div>
            <div className="col-xl-9">
              <ShowUsers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
