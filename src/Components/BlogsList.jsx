import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../bloglist.css";
import BlogListItem from "./BlogListItem";
import { ReactDOM } from "react-dom";
import axios from "axios";
const BlogsList = (props) => {
  console.log(props);
  // const [Blogs,setBlogs]=useState([1]);


  // if (props.title=== 'MyBlog'&&props.BlogsList.length===0) {
  //   toast("You Don't Add Posts Yet !");
  // }
  // else if (props.title=== 'Followers'&&props.BlogsList.length===0) {
  //   toast("You Don't Have followers Yet !");
  // }
  return (
    <React.Fragment>
      <ToastContainer />

      <div className="flex-container-row">
        <div className="display-MyBlogs">
          <h1>{props.title}</h1>
        </div>
        {props.BlogsList.map((blog) => (
          <BlogListItem
          key={blog?.id}
            {...props}
            BlogsList={blog}
            handleDelete={props.handleDelete}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default BlogsList;
