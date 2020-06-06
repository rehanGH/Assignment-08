import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      rows: 5,
      columns: 5,
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

  applyColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.rows; i++) {
      rows.push(<TableRow columns={this.state.columns} color={this.state.color} applyColor={this.applyColor} />);
    }

    return (
      <div>
        <h5>Amount of Rows: {this.state.rows}</h5>
        <h5>Amount of Columns: {this.state.columns}</h5>
        <button className="button" onClick={this.addRow}>Add Row</button>
        <button className="button" onClick={this.addColumn}>Add Column</button>
        <button className="button" onClick={this.removeRow}>Remove Row</button>
        <button className="button" onClick={this.removeColumn}>Remove Column</button>
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