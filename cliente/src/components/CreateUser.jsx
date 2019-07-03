/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "",
      name: "",
      balance: "",
      categories: [],
      alert: false
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(console.log);
  }

  handleChangeCategory(event) {
    this.setState({ categoryId: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeBalance(event) {
    this.setState({ balance: event.target.value });
  }

  handleData(e) {
    e.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 0,
        category_id: this.state.categoryId,
        name: this.state.name,
        balance: this.state.balance
      })
    });
    this.setState({ alert: true });
    this.setState({ categoryId: "" });
    this.setState({ name: "" });
    this.setState({ balance: "" });
  }

  renderAlert() {
    if (this.state.alert === true) {
      return (
        <div class="alert alert-success" role="alert">
          User has been created
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Create a new User</h1>
        {this.renderAlert()}
        <form onSubmit={this.handleData}>
          <div className="input-group mb-3">
            <select
              value={this.state.categoryId}
              onChange={this.handleChangeCategory}
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Choose a category...</option>
              {this.state.categories.map(category => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
            <div className="input-group-append">
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>
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
          <p>Balance: </p>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              value={this.state.balance}
              onChange={this.handleChangeBalance}
              type="text"
              class="form-control"
              aria-label="Amount"
              placeholder="0"
            />
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
