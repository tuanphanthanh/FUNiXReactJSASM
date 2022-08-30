import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Nhan vien</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link"  to='/deparment'><span className="fa fa-list fa-lg"></span> Phòng ban</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/salary'><span className="fa fa-address-card fa-lg"></span> Bảng lương</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ứng dụng quản lý nhân sự v1.0</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend vel nisi
                                     et ultricies. Nunc sit amet augue congue, tincidunt turpis id, hendrerit magna. 
                                     Donec sed auctor urna. Phasellus cursus vitae magna vel malesuada. Curabitur sit
                                      amet tristique metus. Fusce ipsum dolor, rutrum sed arcu dapibus, malesuada luctus nulla.
                                       Mauris suscipit maximus nibh a iaculis. Praesent feugiat, risus eu tincidunt posuere, 
                                       lacus sem luctus diam, non sagittis ante velit ac velit. Proin dapibus ac neque non feugiat.
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas et auctor erat.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header