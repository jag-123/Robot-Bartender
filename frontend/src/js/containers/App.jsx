import React from 'react';
import List from '../components/List.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: []
    };
  }

  componentDidMount(){
    fetch('/showDrinks', {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then((response) => { return response.json(); })
      .then((json) => { console.log(json); this.setState(json)});
  } 

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Robo-Bartender</h1>
        <div className="App-result">
        </div>
        <div>
          <List list={this.state.drinks} />
        </div>,
      </div>
    );
  }
}

export default App;