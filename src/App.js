import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list';

import SearchBox from './components/search-box/search-box';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // gets lexical scoping boiiii
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  // Lifecycle method
  componentDidMount() {
    // Returns us a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filterMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
