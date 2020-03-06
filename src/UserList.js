import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    let listaUsers = <div></div>;

    if (this.props.users !== null) {
      listaUsers = this.props.users
        .filter(user =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        )
        .map(user => {
          return <h4 key={user.id}>{user.name}</h4>;
        });
    }

    return (
      <div>
        {this.state.searchTerm}
        <form>
          <input placeholder='Buscalee' onChange={this.handleOnChange} />
        </form>
        {listaUsers}
      </div>
    );
  }
}

export default UserList;
