import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 3,
      columns: 3,
      cellKey: 0,
      fill: false,
      clear: false,
      color: null
    }
  }

  addRow = () => {
    this.setState({rows: this.state.rows + 1})
  }

  addColumn = () => {
    this.setState({columns: this.state.columns + 1})
  }

  removeRow = () => {
    this.setState({rows: this.state.rows - 1});
  }

  removeColumn = () => {
    this.setState({columns: this.state.columns - 1});
  }

  colorChange = (event) => {
    this.setState({color: event.target.value});
  }
 
  fillAll = (event) => {

    this.setState(prevState => ({
      fill: !prevState.fill, clear: false
    }));
  
  }

  clearAll = (event) => {

    this.setState(prevState => ({
      clear: !prevState.clear, fill: false
    }));
  
  }
  applyColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
  }

  render() {
    let rows = [];
    
      for (let i = 0; i < this.state.rows; i++) {
        console.log(this)
        rows.push(<TableRow 
          columns={this.state.columns} 
          color={this.state.color} 
          fill={this.state.fill}
          clear={this.state.clear}
          applyColor={this.applyColor} 
          fillAll={this.fillAll}
          clearAll={this.clearAll} />);
      }

    return (
      <div>
        <h5>Amount of Rows: {this.state.rows}</h5>
        <h5>Amount of Columns: {this.state.columns}</h5>
        <button className="button" onClick={this.addRow}>Add Row</button>
        <button className="button" onClick={this.addColumn}>Add Column</button>
        <button className="button" onClick={this.removeRow}>Remove Row</button>
        <button className="button" onClick={this.removeColumn}>Remove Column</button>
        <button className="button" onClick={this.fillAll}>Fill All</button>
        <button className="button" onClick={this.clearAll}>Clear All</button>
        <select className="select-options"onChange={this.colorChange}>
          <option>Select a color... </option>
          <option value="#1b2631">Dark Blue</option>
          <option value="#424949">Dark Gray</option>
          <option value="#6e2c00">Brown</option>
          <option value="#7d6608">Mustard</option>
          <option value="#145a32">Dark Green</option>
          <option value="#4a235a">Dark Pruple</option>
          <option value="#641e16">Dark Red</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;