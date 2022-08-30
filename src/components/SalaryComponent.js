import React from 'react'
import { Card, CardImg, Alert, CardText, CardBody, CardTitle,Button,Badge, CardGroup,CardSubtitle,CardFooter } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

 
function RenderSala ({staff }) {
  const Cal=(staff)=>parseInt(staff.salaryScale)*3000000 +parseInt(staff.overTime)*200000
  return (
      <Card>  
        
      <CardTitle tag="h5">{staff.name}</CardTitle>
      <CardText>Mã nhân viên: {staff.id}</CardText>
      <CardText>Hệ số lương: {staff.salaryScale}</CardText>  
      <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
      <CardFooter>
  lương:  {Cal(staff)}
  </CardFooter>
      </Card>




  );
}


const Salary = (props) => {
  const salary = props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-md-6 col-lg-4 mt-1">
         <RenderSala staff ={staff} />
        </div>
      );
  });

  return (
      <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Bảng lương</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
              {salary}
          </div>
      </div>
  );

}


export default Salary;