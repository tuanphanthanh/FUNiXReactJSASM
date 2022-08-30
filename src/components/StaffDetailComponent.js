
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import { Card, CardImg, Alert, CardText, CardBody, CardTitle,Button,Badge } from 'reactstrap';
import dateFormat from 'dateformat'; 


const StaffDetail=(props)=> {
  return (
      <div className="container">
      <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/home">Nhan vien</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>             
      </div>
      <div className="row">
      <div className="col-12 col-md-4 col-lg-3">
    
       <CardImg className='mb-2' width='100%'src={props.staff.image} alt={props.staff.name}/>
      
          </div>
          <div className="col-12 col-md-8 col-lg-9">
          <CardTitle tag="h5"> Họ và tên: {props.staff.name}</CardTitle>
          <CardText >Ngày sinh: {dateFormat(props.staff.doB, "dd/mm/yyyy")}</CardText>
          <CardText>Ngày vào công ty: {dateFormat(props.staff.startDate,"dd/mm/yyyy")}</CardText>
          <CardText>Phòng ban: {props.staff.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {props.staff.annualLeave}</CardText>
          <CardText>Số ngày làm thêm: {props.staff.overTime}</CardText>
      
   
          </div>
      </div>
      </div>
  );     
    }
export default StaffDetail;