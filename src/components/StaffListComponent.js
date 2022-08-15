import React, { Component } from 'react';
import { Card, CardImg, Alert, CardText, CardBody, CardTitle,Button } from 'reactstrap';
import dateFormat from 'dateformat'; ;
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           selectedStaff: null,
           currentClass: "col-12 col-md-6",
          }
    }
    colTwo = () => {
      this.setState({ currentClass: 'col-12 col-md-6'});
  }
    colThree = () => {
      this.setState({ currentClass: 'col-12 col-md-4'});
  }
  colSix = () => {
    this.setState({ currentClass: 'col-12 col-md-2'});
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
              <CardText>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
           </CardBody>
          </Card>
        )
      }    else {
      return(
        <div>
           <Button onClick={this.colTwo} color="primary">2 cot</Button>
          <Button onClick={this.colThree} color="primary">3 cot</Button>
                  <Button onClick={this.colSix} color="primary">6 cot</Button>
                 
        </div>
      );
    }
  }
    render() {
         const text =  <h6><Alert color="primary">Bấm vào tên nhân viên để xem thông tin</Alert> </h6>
         const text2 =  <h6><Alert color="secondary">Bấm vào nút màu cam để trở về trang chủ</Alert></h6>
         const text3 =  <h6><Alert  color="success">Bấm vào nút cột để thay đổi sắp xếp cột</Alert></h6>
        const StaffList = this.props.staffs.filter((item, index) => index < 6).map((staff) => {
            return (
              <div key={staff.id} className= {this.state.currentClass}>
                <Card color="info" onClick={()=> this.onStaffSelect(staff)}>        
                    <CardTitle>{staff.name}</CardTitle>       
                </Card>
  
              </div>
            );
        });

        
        return (
          <div  className="container-fluid">
            <div className="row">           
                  {StaffList}
                  {text}
                  {text2}
                  {text3}

            </div>
            <div className='row'>
            {this.renderStaff(this.state.selectedStaff)}
            </div>
          
          </div>
        );
    }
}

export default StaffList;