import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css';
import'ag-grid-community/dist/styles/ag-theme-balham.css';
import React from 'react';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        {headerName: 'Make', field: 'make' , checkboxSelection:true},
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price' },
      ],

      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },

      ]

    };
  }

  render(){

    return(
      <div className="ag-theme-balham" style={{width: 600, height: 600}} >
        <AgGridReact columnDefs={this.state.columnDefs} rowData={this.state.rowData} ></AgGridReact>
      </div>
    );
  }


}



export default App;
