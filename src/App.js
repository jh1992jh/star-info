import React, { Component, Fragment } from 'react';
import axios from 'axios'
import ParticlesBackground from './components/ParticlesBackground';
import OutputList from './components/OutputList';
import Select from './components/Select';
import './App.css';



class App extends Component {
  state = {
    output: [],
    value: 'people'
  }


  onNewOutput = () => {
    const { value } = this.state;
    axios.get(`https://swapi.co/api/${value}/${Math.floor(Math.random() * 8)}`)
    .then(res => this.setState({ output: [res.data]}))
    .catch(err => console.log(err));
  }

  onSelect = (e) => {
    this.setState({value: e.target.value, output: []})
  } 
  
  render() {
    const { output, value } = this.state;
    let outputContent;
    
    if(output.length === 0) {
      outputContent = <h3 className="infoText">Click The Button</h3>
    } else {
      outputContent = (
        <OutputList value={value} output={output} />
      )
    }
    return (
      <Fragment>
      <ParticlesBackground />
   
      <h1>Star Info</h1>

      <div className="App">
        <div className="charContainer">
        {outputContent}
        </div>
        {/*TODO BUILD A CUSTOM DROPDOWN MENU*/}
        <Select value={value} onSelect={this.onSelect} />
        <button className="charBtn" onClick={this.onNewOutput}>Get a new output</button>
      </div>
      </Fragment>
    )
  }
}

export default App;