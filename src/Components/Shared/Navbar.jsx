import React from "react";
import { Link } from "react-router-dom";
import Login from "./../Login";
import { useState } from "react";

const NavBar = () => {
  const [token, setToken] = useState("token");
  const HandleLogout = () => {
    localStorage.removeItem(token);
    setToken("");
  };
  // localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzU1MmIwYWEwNjk5MjEzMDA3ODZjNCIsImlhdCI6MTU5MDAwNzk4Nn0.51EtR4lhAZnoBoE67BuEfkEwhyn7yCdWnOsPkeVaUnE')
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed "
        style={{ width: 100 + "%", position: "fixed", top: 0 }}
      >
        <Link className="navbar-brand" to="/">
          Blog Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {localStorage.getItem("token") !== null ? (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            ) : null}

            {localStorage.getItem("token") !== null ? (
              <li className="nav-item">
                <Link className="nav-link" to="/followers">
                  Followers
                </Link>
              </li>
            ) : null}

            {localStorage.getItem("token") !== null ? (
              <li className="nav-item">
                <Link className="nav-link" to="/following">
                  Following
                </Link>
              </li>
            ) : null}

            {localStorage.getItem("token") !== null ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Main Blogs Features
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/add">
                    Add Blog
                  </Link>
                  <Link className="dropdown-item" to="/myBlogs">
                    My Blogs
                  </Link>
                  <div className="dropdown-divider">About Us</div>
                </div>
              </li>
            ) : null}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {localStorage.getItem("token") !== null ? (
              <div className="flex-container-row">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0 search-nav"
                  type="submit"
                >
                  Search
                </button>
                <ul className="navbar-nav mr-auto">
                  {" "}
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={HandleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="navbar-nav mr-auto">
                {" "}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>{" "}
              </ul>
            )}
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
