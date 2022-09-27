
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

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    deps: state.deps,
 
  }
}
  



class Main extends Component {
  
  render() {

    let clone= this.props.staffs
    localStorage.setItem('clone', JSON.stringify(clone));
    let cloneStore = JSON.parse(localStorage.getItem('cloneStore'))||JSON.parse(localStorage.getItem('clone'))
    
    const StaffWithId = ({match}) => {
      return(
          <StaffDetail staff={cloneStore.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} 
          />
      );
    };

    return (
      <div className="container-fluid">
           <Header/>   
       <Switch>
       <Route  exact path='/home' component={() => <StaffList staffs={cloneStore} />} />
       <Route  path='/home/:staffId' component={StaffWithId} />
       <Route path='/salary' component={() => <Salary staffs={cloneStore} />} /> 
       <Route path='/deparment' component={() => <Department deps={this.props.deps} />} /> 
       <Redirect to="/home" />
          </Switch>
        
        
        <Footer/>
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps)(Main));
