import React from 'react';
import './App.css';
import {Table} from './components';
import {Media, Alert} from "react-bootstrap";

function App() {
  return (
    <>
    <Media>
    <h5>Assignment #8 DOM III with ReactJS</h5>
    </Media>
    <div className="App">
      <Table className="table-class"/>
    </div>
    </>
  );
}

export default App;
