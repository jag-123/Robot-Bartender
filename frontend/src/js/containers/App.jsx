import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: ''
    };
  }

  setDrinks = (code) => {
    this.setState({ code });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Robo-Bartender</h1>
        <List setDrinks={this.setDrinks}/>
        <div className="App-result">
          {this.state.drinks}
        </div>
      </div>
    );
  }
}

export default App;