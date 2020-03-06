import React, { Component } from 'react';
import UserList from './UserList';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchedUsers: null };
  }
  render() {
    const users = [
      { id: 1, nombre: 'juancho' },
      { id: 2, nombre: 'Sammy' },
      { id: 3, nombre: 'jose' }
    ];
    return (
      <div className='App'>
        <Header title='Wenaa' color='red'></Header>
        <UserList users={this.state.fetchedUsers} />
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ fetchedUsers: json }));
  }
}

export default App;
