import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './Inventory';
import sampleCoffes from './sample-coffes';
import Coffe from './Coffe';
import Order from './Order';

class App extends Component {
  state = {
    fishes: {},
    order:{}
  };

  /*componentDidMount () {
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context:this,
      state: 'fishes'
    });
  }*/

  addCoffe = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.state.fishes.fish1 = fish;
    this.setState({fishes});
  };

  deleteCoffe = (key) => {
    const fishes = {...this.state.fishes};

    fishes[key] = null;
    this.setState({fishes});
  }

  loadSampleCoffes = () => {
    this.setState({fishes: sampleCoffes});
  };

  addCoffeToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order});
  };


  updateStatus = (key) => {
    console.log("Updating status coffe");
    const fishes = {...this.state.fishes};
    if (fishes[key].status === 'available') {
      fishes[key].status = 'unavailable';
      alert (fishes[key].name +" is sold out!");
    } else if (fishes[key].status === 'unavailable'){
      fishes[key].status = 'available';
      alert (fishes[key].name +" on sale");
    }
    this.setState({fishes});
  };

  clearDatas = () => {
    console.log("Delete Menu");
    this.setState({fishes: ''});
    this.setState({order: ''});
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>Final Project - COFFE SHOP</div>
        </header>
        <div className="Left-Container">
        <div className="Frame-Left">
          <ul>
            {Object.keys(this.state.fishes).map(key => <Coffe key={key} index={key} details={this.state.fishes[key]} addCoffeToOrder={this.addCoffeToOrder} updateStatus={this.updateStatus}/>)}
          </ul>
        </div>
        <div className="Frame-Right">
          <Inventory addCoffe={this.addCoffe} loadSampleCoffes={this.loadSampleCoffes} deleteCoffe={this.deleteCoffe} clearDatas={this.clearDatas}/>
          <Order products={this.state.fishes} order={this.state.order} />
        </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
