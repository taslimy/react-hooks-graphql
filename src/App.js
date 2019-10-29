import React from 'react';
import './App.css';
import CardList from './components/card-list//card-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  // Lifecycle method
  componentDidMount() {
    // Returns us a promise
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
