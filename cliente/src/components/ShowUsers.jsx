import React, { Component } from "react";
class ShowUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      categories: [],
      editActive: false,
      category: null,
      name: null,
      balance: null,
      currentUser: null
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
  }
  componentDidMount() {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(console.log);
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(console.log);
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeBalance(event) {
    this.setState({ balance: event.target.value });
  }

  handleEdit(user) {
    this.setState({ currentUser: user.id });
    this.setState({ editActive: true });
    this.setState({ category: user.category_id });
    this.setState({ name: user.name });
    this.setState({ balance: user.balance });
  }

  deleteUser(user) {
    let url = "/api/users/" + user.id;
    fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => console.log(res));
    this.componentDidMount();
  }

  showEdit() {
    if (this.state.editActive) {
      return (
        <tr>
          <th scope="row">{this.state.currentUser}</th>
          <td>
            <select
              value={this.state.category}
              onChange={this.handleChangeCategory}
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>Choose a category...</option>
              {this.state.categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </td>

          <td>
            <input
              className="form-control"
              value={this.state.name}
              onChange={this.handleChangeName}
              type="text"
            />
          </td>
          <td>
            <input
              className="form-control"
              value={this.state.balance}
              onChange={this.handleChangeBalance}
              type="text"
            />
          </td>
          <td>
            <button onClick={this.sendUpdate} className="btn btn-warning">
              Edit
            </button>
          </td>
          <td>-</td>
        </tr>
      );
    } else return null;
  }

  sendUpdate() {
    let user = this.state.currentUser;
    let url = "/api/users/" + user;
    fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.currentUser,
        category_id: this.state.category,
        name: this.state.name,
        balance: this.state.balance
      })
    }).then(res => console.log(res));

    this.setState({ editActive: false });
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <h1 className="mb-3">Usuarios</h1>
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category ID</th>
              <th scope="col">Name</th>
              <th scope="col">Balance</th>
              <th scope="col">Edit</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.showEdit()}
            {this.state.users.map(user => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.category_id}</td>
                <td>{user.name}</td>
                <td>{user.balance}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleEdit(user);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.deleteUser(user);
                    }}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowUsers;
