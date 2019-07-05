import React, { Component } from "react";
class ShowCategories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Categorias</h1>
        <ul>
          {this.state.categories.map(category =>
            <li key={category.id}>{category.name}</li>  
          )}
        </ul>
      </div>
    );
  }
}

export default ShowCategories;
