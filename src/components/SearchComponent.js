import {useState} from "react";
import React from "react";
import { STAFFS } from "../shared/staffs";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Link } from "react-router-dom";
import StaffList from "./StaffListComponent";
import '../App.css';
 function Search (props){
  const [query, setQuery] = useState("")
  return ( 
    <div>
      <input placeholder="Nhập có dấu để lọc" onChange={event => setQuery(event.target.value)} />
    
 {
    props.staffs.filter(staff => {
      if (query === '') {
        return staff;
      } else if (staff.name.toLowerCase().includes(query.toLowerCase())) {
        return staff;
      }
    }).map((staff) => (
       
      <div className="box" key={staff.id}>
         <Link to={`/home/${staff.id}`} >
    <p> {staff.name}</p>
    </Link>   
      </div>
 
    ))
  }
    
    </div>
  )
}
    export default  Search;