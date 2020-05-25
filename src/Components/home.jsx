import React ,{useState , useEffect} from "react";
import axios from 'axios';

import ControlledCarousel from "./ControlledCarousel";
import NavBar from "./Shared/Navbar";
import Blog from "./Blog";
import Pagination from "./Pagination";
import BlogsList from './BlogsList';
const Home = (props) => {
 
   const [blogsList,setBlogsList]=useState([]);

  
  return (
    <React.Fragment>  
    {props.BlogsList.map(blog=>
     <Blog 
    key={Blog._id}
    blogItem={blog} 
    handleEmailClick={props.handleEmailClick}
    />)}
    <Pagination  BlogsCount={props.BlogsCount} pageSize={props.pageSize}  activePage={props.activePage} handlePageClick={props.handlePageClick}/>
    </React.Fragment>
  );
};

export default Home;
