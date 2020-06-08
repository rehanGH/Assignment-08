import React from "react";

export default function TableCell(props) {

  const mystyle = {
    backgroundColor: props.color
  };
  const clearStyle = {
    backgroundColor: null
  };
  
  if(props.fill === true)//if fillAll cells = true rerender all cells to props.color
    return <td style={mystyle} onDragOver={props.applyColor} draggable={true} onClick={props.applyColor} ></td>
  if(props.clear === true)
    return <td style={clearStyle} onDragOver={props.applyColor} draggable={true} onClick={props.applyColor} ></td>
  else 
  return <td onDragOver={props.applyColor} draggable={true} onClick={props.applyColor} ></td>
}
