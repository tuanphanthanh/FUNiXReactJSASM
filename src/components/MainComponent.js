
import React from 'react';
import {Button, Navbar, NavbarBrand}from 'reactstrap';
import StaffList from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs';
import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Salary from './SalaryComponent';
import Deparment from './DeparmentComponent';
import StaffDetail from './StaffDetailComponent';
import { DEPARTMENTS } from '../shared/staffs';
import Department from './DeparmentComponent';
import Search from './SearchComponent';
class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      staffs: STAFFS,
      deps :DEPARTMENTS
    };
  }
 

  render() {
    const StaffWithId = ({match}) => {
      return(
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} 
          />
      );
    };

    return (
      <div className="container-fluid">
           <Header/>   
       <Switch>
       <Route  exact path='/home' component={() => <StaffList staffs={this.state.staffs} />} />
       <Route  path='/home/:staffId' component={StaffWithId} />
       <Route path='/salary' component={() => <Salary staffs={this.state.staffs} />} /> 
       <Route path='/deparment' component={() => <Department deps={this.state.deps} />} /> 
       <Route path='/search' component={() => <Search staffs={this.state.staffs} />} /> 
       <Redirect to="/home" />
          </Switch>
        
        
        <Footer/>
      </div>
    );
  }
  
}

export default Main;
