import React, { Component } from "react";
import TableCell from "./TableCell";

export default function TableRow(props) {
  let cells = [];
  
  for (let i = 0; i < props.columns; i++) {
    cells.push(<TableCell 
      color={props.color} 
      fill={props.fill} 
      clear={props.clear}
      applyColor={props.applyColor} 
      fillAll={props.fillAll}
      clearAll={props.clearAll} />)
  }
  return <tr>{cells}</tr>
}

