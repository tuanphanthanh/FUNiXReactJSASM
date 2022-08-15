import logo from './logo.svg';
import React from 'react';
import {Button, Navbar, NavbarBrand}from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { STAFFS } from './shared/staffs';

import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      staffs: STAFFS
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"><Button color="warning">Ứng dụng quản lý nhân sự v1.0 </Button></NavbarBrand>
          </div>
        </Navbar>
       <StaffList staffs = {this.state.staffs}/>
      </div>
    );
  }
  
}

export default App;
