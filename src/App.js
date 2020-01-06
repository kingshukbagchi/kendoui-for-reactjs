import React, { Component } from 'react';
import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()

    }; //state
    this.onchange = this.onchange.bind(this);
  } // constructor

  onchange(e) {
    console.log(e.sender.value());
    this.setState({
      dateTime: e.sender.value()
    }); //setState
  } //onChange

  render() {
    return (
      <div className="App">
        <div className="date-picker">
          <DatePicker
            value={this.dateTime}
            min={new Date(2017, 11, 1)}
            max={new Date(2020, 1, 6)}
            format={"yyyy/MM/dd"}
            change={this.onchange}
          />

        </div>
        Hi
      </div>
    ); //return
  } //render
} //class

export default App;
