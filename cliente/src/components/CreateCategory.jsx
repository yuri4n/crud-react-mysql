import React, { Component } from "react";

class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      alert: false
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleData(e) {
    e.preventDefault();
    fetch("/api/categories", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 0,
        name: this.state.name
      })
    });
    this.setState({ alert: true });
    this.setState({ name: "" });
  }

  renderAlert() {
    if (this.state.alert === true) {
      return (
        <div class="alert alert-success" role="alert">
          Category has been created
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Create a new Category</h1>
        {this.renderAlert()}
        <form onSubmit={this.handleData}>
          <div className="form-group">
            <label for="Name">Name: </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              value={this.state.name}
              onChange={this.handleChangeName}
              placeholder=""
            />
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default CreateCategory;
