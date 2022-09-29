import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import {
  Breadcrumb,
  BreadcrumbItemCard,
  CardImg,
  Alert,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge,
  Col,
  Row,
  Label,
  Card,
  BreadcrumbItem,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  FormFeedback,
  CalendarIcon,
} from "reactstrap";

import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";





class StaffList extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNgaysinhChange = this.handleNgaysinhChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleNgayvaoChange = this.handleNgayvaoChange.bind(this)
    
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {

      touched: {
        ngayvao:false,
        ngaysinh : false,
        name: false,
       
      },

      search: "",
      query: "",
      isNavOpen: false,
      isModalOpen: false,



  ngayvao: "",
ngaysinh : "",
name: "",
heso: "1",
phongban: "Sale",
ngaynghi: "0",
lamthem: "0",





     
    };
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  handleBlur = (field) => (evt) => {
    this.setState({
        touched: { ...this.state.touched, [field]: true }
    });
}


validate(name, ngaysinh,ngayvao) {
  const errors = {
      name: '',
      ngayvao: '',
   ngaysinh: ''

  };

  if (this.state.touched.name && name.length == 0)
            errors.name = 'yêu cầu nhập';
 
            else if (this.state.touched.name && name.length <3) 
            errors.name = 'yêu cầu nhiều hơn 2 ký tự';   
            else if (this.state.touched.name && name.length >30)
            errors.name = 'yêu cầu ít hơn 30 ký tự';

        if(this.state.touched.ngaysinh&&ngaysinh=="")
    errors.ngaysinh = 'yêu cầu nhập';
    if(this.state.touched.ngayvao&&ngayvao == "")
    errors.ngayvao = 'yêu cầu nhập';

    
    
            return errors;
        }

  handleNgayvaoChange(date) {
    this.setState({
      ngayvao:date
    })
  }

  handleNgaysinhChange(date){
    this.setState({ngaysinh:date})
  }
  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

  this.setState({
    [name]: value
  });
}
   


  handleSalaryChange() {
    {
      this.handleInputChange
      this.setState({
        salaryHolder: "1.0 -> 3.0",
      });
    }
  }
  handleSearch(event) {
    event.preventDefault();
    var search = this.state.search;
    search = event.target.value;
    this.setState({ search: search });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    this.validate(this.state.name, this.state.ngaysinh,this.state.ngayvao)
    let search = this.state.search;
    this.setState({ query: search });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit( e) {
 e.preventDefault()
 const errors = this.validate(this.state.name, this.state.ngaysinh, this.state.ngayvao);
 if(this.state.name.length <=2|| this.state.name.length >30|| this.state.name==''||this.state.ngaysinh==''||this.state.ngayvao=='')
 {
  
  this.setState({
    touched: {
      ngayvao:true,
      ngaysinh : true,
      name: true
    }
  })


 }else {
  let ID = JSON.parse(localStorage.getItem("newId")) || 16;

  localStorage.setItem("newId", JSON.stringify(ID + 1));

  let cloneStore =
    JSON.parse(localStorage.getItem("cloneStore")) ||
    JSON.parse(localStorage.getItem("clone"));
  let newStaffs = {
    id: ID,
    doB: this.state.ngaysinh,
    name: this.state.name,
    salaryScale: this.state.heso,
    startDate: this.state.ngayvao,
    department: this.state.phongban,
    annualLeave: this.state.ngaynghi,
    overTime: this.state.lamthem,
    image: "/assets/images/New_staff.png",
  };
 
  cloneStore.push(newStaffs);
  localStorage.setItem("cloneStore", JSON.stringify(cloneStore));
  this.setState({
    touched: {
      ngayvao:false,
      ngaysinh : false,
      name: false,
     
    },
    isModalOpen: false,
    ngayvao: "",
    ngaysinh : "",
    name: "",
    heso: "1",
    phongban: "Sale",
    ngaynghi: "0",
    lamthem: "0",
  })
 }
   
   
  }

  render() {
    const errors = this.validate(this.state.name, this.state.ngaysinh, this.state.ngayvao);
    let cloneStore =
      JSON.parse(localStorage.getItem("cloneStore")) ||
      JSON.parse(localStorage.getItem("clone"));
    const capQue = this.state.query;

    const StaffList = cloneStore
      .filter((staff) => {
        if (capQue === "") {
          return staff;
        } else if (staff.name.toLowerCase().includes(capQue.toLowerCase())) {
          return staff;
        }
      })

      .map((staff) => {
        return (
          <div key={staff.id} className="col-6 col-md-4 col-lg-2">
            <Card className="mx-0 mt-2 mb-2" color="info">
              <Link to={`/home/${staff.id}`}>
                <CardImg top width="100%" src={staff.image} alt={staff.name} />
                <CardTitle className="text-center light ">
                  {staff.name}
                </CardTitle>
              </Link>
            </Card>
          </div>
        );
      });

    return (
      <div className="container-fluid">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Nhan vien </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row ">
          <div className=" col-6 col-md-2  ">
            <h2>
              <Badge color="warning">Nhân viên</Badge>
            </h2>
          </div>
          <div className=" col-3 col-md-2 ml-3 ">
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-plus fa-lg"></span>{" "}
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>
                <h5>Thêm nhân viên</h5>
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={ this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor="name" md={4}>
                      <h6> Tên</h6>
                    </Label>
                    <Col md={8}>
                    <Input type="text" id="name" name="name"   
                
                                        value={this.state.name}
                                       onChange={this.handleInputChange}
                         
                                       invalid={errors.name !== ''}
                                       onBlur={this.handleBlur('name')}                                                                         
                                       />
                                        <FormFeedback>{errors.name}</FormFeedback>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="ngayvao" md={4}>
                      <h6> Ngày sinh</h6>
                    </Label>
                    <Col md={8}>
                
  
                      <DatePicker
               
                 
   onBlur={this.handleBlur('ngaysinh')}
   onChange={this.handleNgaysinhChange}
         value={this.state.ngaysinh}
    format="dd/MM/yyyy"
    className="class1"
    clearIcon={null}
    dayPlaceholder="dd"
    monthPlaceholder="mm"
    yearPlaceholder="yyyy"
  />
                 
           <div className="custom">{errors.ngaysinh} </div>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="datepick" md={4}>
                      <h6> Ngày vào công ty</h6>
                    </Label>
                    <Col md={8}>
                    <DatePicker

  onBlur={this.handleBlur('ngayvao')} 



                     value={this.state.ngayvao}
                     onChange={this.handleNgayvaoChange}
    format="dd/MM/yyyy"
    className="class1"
    clearIcon={null}
    dayPlaceholder="dd"
    monthPlaceholder="mm"
    yearPlaceholder="yyyy"
  />
        <div className="custom">{errors.ngayvao} </div>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="phongban" md={4}>
                      <h6>Phòng ban</h6>
                    </Label>
                    <Col md={8}>
                    
                    <Input type="select" name="phongban"
                        value={this.state.phongban}
                         onChange={this.handleInputChange}>
                        <option>Sale</option>
                        <option>Hr</option>
                        <option>Marketing</option>
                        <option>It</option>
                        <option>Finance</option>
                 
                          </Input>
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label htmlFor="heso" md={4}>
                      <h6>Hệ số lương</h6>
                    </Label>
                    <Col md={8}>
                    <Input  type="number"
              
                        id="heso"
                        name="heso"
                        value={this.state.heso}
            Placeholder= "1.0-->3.0"
                        onChange={this.handleInputChange}
                        min={1}
                        max={3}
                        />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="ngaynghi" md={4}>
                      <h6>Số ngày nghỉ còn lại</h6>
                    </Label>
                    <Col md={8}>
                    <Input 
                      value={this.state.ngaynghi}
                      onChange={this.handleInputChange}
                    type="number"
                        id="ngaynghi"
                        name="ngaynghi"
            
                        />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="lamthem" md={4}>
                      <h6>Số ngày đã làm thêm</h6>
                    </Label>
                    <Col md={8}>
                      <Input   
                        value={this.state.lamthem}
                        onChange={this.handleInputChange}
                      type="number"
                        name="lamthem"                              
                 
                      />
          
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Thêm
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>

          <div className="col-12 col-md-6 ml-auto">
            <div>
              <Row className="form-group">
                <Col>
                  <Input
                    type="text"
                    id="search"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleSearch.bind(this)}
                  />
                </Col>
                <Col>
                  <Button
                    color="primary"
                    onClick={this.handleSubmitSearch.bind(this)}
                  >
                    tim
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="row">{StaffList}</div>
      </div>
    );
  }
}

export default StaffList;
