import React, { Component } from 'react';
import { Card, CardImg, Alert, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat'; 
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedStaff: null
        }
    }

    onStaffSelect(staff) {
      this.setState({selectedStaff: staff})
    }
    renderStaff(staff){
      if(staff != null) {
        return(
          <Card color="warning">
           <CardImg width="100%"  src={staff.image} alt={staff.name}/>
           <CardBody>
              <CardTitle tag="h5"> Họ và tên {staff.name}</CardTitle>
              <CardText >Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
              <CardText>Ngày vào công ty: {staff.startDate}</CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
           </CardBody>
          </Card>
        )
      }    else {
      return(
        <div></div>
      );
    }
  }
    render() {
         const text =  <h6><Alert color="primary">Bấm vào tên nhân viên để xem thông tin</Alert> </h6>
        const StaffList = this.props.staffs.filter((item, index) => index < 6).map((staff) => {
            return (
              <div key={staff.id} className="col-12 col-md-5 m-1">
                <Card color="info" onClick={()=> this.onStaffSelect(staff)}>        
            
                    <CardTitle>{staff.name}</CardTitle>       
                </Card>
             
              </div>
            );
        });
        return (
          <div  className="container">
            <div className="row">           
                  {StaffList}
                  {text}
            </div>
            <div className='row'>
            {this.renderStaff(this.state.selectedStaff)}
            </div>
          
          </div>
        );
    }
}

export default StaffList;