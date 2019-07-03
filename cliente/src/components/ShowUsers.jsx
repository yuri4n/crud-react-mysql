import React, { Component } from "react";
class ShowUsers extends Component {
  state = {
      users: []
  };
  componentDidMount() {
    fetch("/api/users")
    .then(res => res.json())
    .then(data => {
      this.setState({ users: data });
    })
    .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        <table class="table text-center">
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category ID</th>
              <th scope="col">Name</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => 
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.category_id}</td>
              <td>{user.name}</td>
              <td>{user.balance}</td>
            </tr>   
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowUsers;
