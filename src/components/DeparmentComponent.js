import React from 'react'
import { Card, CardImg, Alert, CardText, CardBody, CardTitle,Button,Badge, CardGroup,CardSubtitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import dateFormat from 'dateformat'; 

function RenderDepart ({dep }) {
  return (
      <Card>
                  <CardTitle>{dep.name}</CardTitle>
                  <CardText>Số lượng nhân viên: {dep.numberOfStaff}</CardText>
        
      </Card>
  );
}


const Department = (props) => {
  const department = props.deps.map((dep) => {
      return (
        <div key={dep.id} className="col-12 col-md-6 col-lg-4 mt-1">
         <RenderDepart dep ={dep} />
        </div>
      );
  });

  return (
      <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Phòng ban</h3>
                  <hr />
              </div>                
          </div>
          <div className="row">
              {department}
          </div>
      </div>
  );

}


export default Department;