import React, { Component } from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Blog from "./Components/Blog";
import BlogForm from "./Components/BlogForm";
import UserProfile from "./Components/UserProfile";
import BlogsList from "./Components/BlogsList";
import StartPost from "./Components/StartPost";
import ProfileList from "./Components/ProfileList";
import ErrorPage from "./Components/ErrorPage";

class App extends Component {
  state = {
    Blogs: [],
    Users: [],
    MyBlogs: [],
    myBlogsTitle: " ",
    myFollowersTitle: " ",
    profileId: 0,
    myFollowers: [],
    myFollowings: [],
    pageSize:2,
    BlogsCount:0,
    activePage:1,
  
  };
  

  componentDidMount() {
    // debbuger;
    // x=window.location.pathname;
    axios
      .get("http://localhost:4000/blog/count")
      .then((result) => {
        this.setState({ BlogsCount: result.data.count });
      })
      .catch((err) => {});


      axios
      .get("http://localhost:4000/blog/Blogs?pageNo="+this.state.activePage+"&size="+this.state.pageSize)
      .then((result) => {
      
        this.setState({ Blogs: result.data.message });
      })
      .catch((err) => {});

    axios
      .get("http://localhost:4000/user/myBlogs", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        debugger;
        if (result.data.length <= 0) {
          debugger;
          this.state.myBlogsTitle = "You Don't Post Any Blogs Yet";
          document.getElementsByClassName("display-MyBlogs")[0].style.display =
            "flex";
            this.setState({ MyBlogs: [] });

          }
          else{

            this.setState({ MyBlogs: result.data });
          }
      })
      .catch((err) => {});

      
  }
  handleFollowingLoad=()=>{
     
    axios
      .get("http://localhost:4000/user/following", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
    
        if (result.data.length <= 0) {
          this.state.myBlogsTitle = "You Don't  Follow any one Yet";
          document.getElementsByClassName(
            "display-MyFollowers"
          )[0].style.display = "flex";
        }
        this.setState({ myFollowings: result.data });
      })
      .catch((err) => {});
   
  }
  handleFollowers=()=>{
    debugger;
    axios
      .get("http://localhost:4000/user/followers", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
  
        if (result.data.length <= 0) {
          this.state.myBlogsTitle = "You Don't have Followers Yet";
          document.getElementsByClassName(
            "display-MyFollowers"
          )[0].style.display = "flex";
        }
        this.setState({ myFollowers: result.data });
      })
      .catch((err) => {});


  }

  handleFollowing = (id) => {
    
    const url = "http://localhost:4000/user/follow";
    // const header = {
    //   Authorization: localStorage.getItem("token"),
    //   RequestedProfileId: id,
    // };

    axios
      .post(url,null, { headers: {Authorization: localStorage.getItem("token"),
      RequestedProfileId: id }})
      .then((result) => {
      
        this.setState({ myFollowers: result.data });
      })
      .catch((err) => {
       
        console.log(err);
      });
  };

  handleDelete = (id) => {
    debugger;
  
    axios
      .delete("http://localhost:4000/blog/" + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((result) => {
        debugger;
        if(result.data.length>0)
        {
          this.setState({ MyBlogs: result.data });
        }   
        else
        {
          this.setState({ MyBlogs:[] });
        }

        // updateState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEmailClick = (id) => {
    debugger;
    this.state.profileId = id;
  };
  handlePageClick=(pageNumber)=>
  {
    debugger;
    this.state.activePage=pageNumber;
    document.getElementsByClassName("1")[0].classList.remove("active");

    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName(pageNumber)[0].classList.add("active");
    axios
    .get("http://localhost:4000/blog/Blogs?pageNo="+pageNumber+"&size="+this.state.pageSize)
    .then((result) => {
      debugger;
      this.setState({ Blogs: result.data.message });
    })
    .catch((err) => {});
  }

  render() {
    return (
      <React.Fragment>
        <main className="container new-container">
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/blog" component={Blog}></Route>
            <Route path="/Add" component={BlogForm}></Route>
            <Route
              path="/profile"
              render={(props) => (
                <UserProfile
                  {...props}
                  BlogsList={this.state.MyBlogs}
                  profileId={this.state.profileId}
                  handleFollowing={this.handleFollowing}
                />
              )}
            ></Route>
            <Route
              path="/profile/:id"
              render={(props) => (
                <UserProfile
                  {...props}
                  BlogsList={this.state.MyBlogs}
                  profileId={this.state.profileId}
                />
              )}
            ></Route>
            <Route
              path="/list"
              render={(props) => (
                <BlogsList {...props} BlogsList={this.state.Blogs} />
              )}
            ></Route>

            <Route
              path="/followers"
              render={(props) => (
                <ProfileList
                  {...props}
                  myFollowings={[]}
                  myFollowers={this.state.myFollowers}
                  Followtitle="Followers"
                  handleFollowers={this.handleFollowers}
                  handleFollowingLoad={this.handleFollowingLoad}

                  // title={'Followers'}
                />
              )}
            ></Route>

            <Route
              path="/following"
              render={(props) => (
                <ProfileList
                  {...props}
                  myFollowings={this.state.myFollowings}
                  myFollowers={[]}
                  Followtitle="Followings"
                  handleFollowingLoad={this.handleFollowingLoad}
                  handleFollowers={this.handleFollowers}

                />
              )}
            ></Route>

            <Route
              path="/myBlogs"
              render={(props) => (
                <BlogsList
                  {...props}
                  BlogsList={this.state.MyBlogs}
                  title={'MyBlog'}
                  blogTitle="Blogs"
                  handleDelete={this.handleDelete}

                  // handleDelete={this.handleDelete}
                />
              )}
            ></Route>
            <Route
              from="/"
              to="/home"
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  BlogsList={this.state.Blogs}
                  handleDelete={this.handleDelete}
                  handleEmailClick={this.handleEmailClick}
                  BlogsCount={this.state.BlogsCount}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  handlePageClick={this.handlePageClick}
                />

              )}
            ></Route>

            {/* <Route path="/" component={StartPost}></Route> */}
            <Redirect exact from="/" to="/home" />
            <Route component={ErrorPage} />
            {/* <Redirect from="/" to="/home" />   */}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
