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

import { Control, LocalForm, Errors, Field } from "react-redux-form";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

const MyDatePiker = (props) => (
  <DatePicker
    {...props}
    format="dd/MM/yyyy"
    className="class1"
    clearIcon={null}
    dayPlaceholder="dd"
    monthPlaceholder="mm"
    yearPlaceholder="yyyy"
  />
);

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.state = {
      search: "",
      query: "",
      isNavOpen: false,
      isModalOpen: false,
      salaryHolder: "",
    };
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSalaryChange() {
    {
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
    let search = this.state.search;
    this.setState({ query: search });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    this.setState({
      isModalOpen: false,
    });
    let ID = JSON.parse(localStorage.getItem("newId")) || 16;

    localStorage.setItem("newId", JSON.stringify(ID + 1));

    let cloneStore =
      JSON.parse(localStorage.getItem("cloneStore")) ||
      JSON.parse(localStorage.getItem("clone"));
    let newStaffs = {
      id: ID,
      doB: values.dob,
      name: values.name,
      salaryScale: values.heso,
      startDate: values.datepick,
      department: values.phongban,
      annualLeave: values.ngaynghi,
      overTime: values.lamthem,
      image: "/assets/images/New_staff.png",
    };

    cloneStore.push(newStaffs);
    localStorage.setItem("cloneStore", JSON.stringify(cloneStore));
  }

  render() {
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
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                    <Label htmlFor="name" md={4}>
                      <h6> Tên</h6>
                    </Label>
                    <Col md={8}>
                      <Control.text
                        model=".name"
                        id="name"
                        name="name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(30),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                          required: "vui lòng nhập",
                          minLength: "yêu cầu nhiều hơn 2 ký tự",
                          maxLength: "yêu cầu ít hơn 30 ký tự",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="dob" md={4}>
                      <h6> Ngày sinh</h6>
                    </Label>
                    <Col md={8}>
                      <Control
                        model=".dob"
                        id="dob"
                        name="dob"
                        component={MyDatePiker}
                        className="form-control"
                        validators={{
                          required: (val) => val !== undefined,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".dob"
                        show="touched"
                        messages={{
                          required: "vui lòng nhập",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="datepick" md={4}>
                      <h6> Ngày vào công ty</h6>
                    </Label>
                    <Col md={8}>
                      <Control
                        model=".datepick"
                        id="datepick"
                        name="datepick"
                        component={MyDatePiker}
                        className="form-control"
                        validators={{
                          required: (val) => val !== undefined,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".datepick"
                        show="touched"
                        messages={{
                          required: "vui lòng nhập",
                        }}
                      />
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="phongban" md={4}>
                      <h6>Phòng ban</h6>
                    </Label>
                    <Col md={8}>
                      <Control.select
                        model=".phongban"
                        name="phongban"
                        id="phongban"
                        type="text"
                        className="form-control"
                        defaultValue="Sale"
                      >
                        <option>Sale</option>
                        <option>Hr</option>
                        <option>Marketing</option>
                        <option>It</option>
                        <option>Finance</option>
                      </Control.select>
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="heso" md={4}>
                      <h6>Hệ số lương</h6>
                    </Label>
                    <Col md={8}>
                      <Control.text
                        model=".heso"
                        id="heso"
                        name="heso"
                        type="number"
                        className="form-control"
                        placeholder={this.state.salaryHolder}
                        onChange={this.handleSalaryChange}
                        min={1}
                        max={3}
                        defaultValue={1}
                      />
                      <Errors className="text-danger" model=".heso" />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="ngaynghi" md={4}>
                      <h6>Số ngày nghỉ còn lại</h6>
                    </Label>
                    <Col md={8}>
                      <Control.text
                        model=".ngaynghi"
                        id="ngaynghi"
                        name="ngaynghi"
                        className="form-control"
                        type="number"
                        defaultValue={0}
                      />
                      <Errors
                        className="text-danger"
                        model=".ngaynghi"
                        show="touched"
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="lamthem" md={4}>
                      <h6>Số ngày đã làm thêm</h6>
                    </Label>
                    <Col md={8}>
                      <Control.text
                        model=".lamthem"
                        id="lamthem"
                        name="lamthem"
                        className="form-control"
                        type="number"
                        defaultValue={0}
                      />
                      <Errors className="text-danger" model=".lamthem" />
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }}>
                      <Button type="submit" color="primary">
                        Thêm
                      </Button>
                    </Col>
                  </Row>
                </LocalForm>
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
