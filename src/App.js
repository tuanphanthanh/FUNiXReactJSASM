import logo from './logo.svg';
import React from 'react';
import {Navbar, NavbarBrand}from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { STAFFS } from './shared/staffs';
import { DEPARTMENTS } from './shared/staffs';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
  }

  render() {
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
       <StaffList staffs = {this.state.staffs}/>
      </div>
    );
  }
  
}

export default App;
