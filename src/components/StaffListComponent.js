import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import { Card, CardImg, Alert, CardText, CardBody, CardTitle,Button,Badge } from 'reactstrap';
import dateFormat from 'dateformat'; 

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedStaff: null,
           currentClass: "col-6 col-md-4 col-lg-2",
          }
    }
  



    render() {
         
        const StaffList = this.props.staffs.map((staff) => {
            return (
              <div key={staff.id} className= {this.state.currentClass}>
               
          
                <Card className='mx-0 mt-2 mb-2' color="info" >   
                <Link to={`/home/${staff.id}`} >
                    <CardImg top  width='100%'  src={staff.image} alt={staff.name}/>
                    <CardTitle  className="text-center">{staff.name}</CardTitle>       
                    </Link>          
                </Card>
            
              </div>
            );
        });

        
        return (
          <div  className="container-fluid">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Nhan vien</BreadcrumbItem>
                </Breadcrumb>             
            </div>
              <div className='row'>
                <h2><Badge color="warning">Nhân viên</Badge></h2>            
            </div>
            <div className="row">    
                  {StaffList}             
            </div>
            <div className='row'>
                  
            </div>          
            
          
          
          </div>
        );
    }
}

export default StaffList;