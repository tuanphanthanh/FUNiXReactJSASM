
import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishdetailComponent';
import { Link } from 'react-router-dom';
function RenderStaffItem ({staff, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${staff.id}`} >
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardImgOverlay>
                    <CardTitle>{staff.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.staffs.map((dish) => {
        return (
          <div key={staff.id} className="col-12 col-md-5 m-1">
           <RenderStaffItem staff ={staff} />
          </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

}



export default Menu;