import React, { useEffect, useState } from "react";
import axios from "axios";

import "../ProfileStyle.css";
import { Link } from "react-router-dom";

const UserProfile = (props) => {

  var data;
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [blogs, setBlogs] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");

  var count = 0;

  useEffect(() => {
    
    let url;
    let header;
    if (props.profileId == 0) {
      url = REACT_APP_BACKEND_URL+"/user/profile";
      header = {
        Authorization: localStorage.getItem("token"),
      };
      setTitle("View Your Blogs");
    } else {
      
      url = REACT_APP_BACKEND_URL+"/user/profile/" + props.profileId;
      header = {
        Authorization: localStorage.getItem("token"),
        RequestedProfileId: props.profileId,
      };
      setTitle("Follow");
    }
    axios
      .get(url, { headers: header })
      .then((result) => {
        
        updateState(result.data);
      })
      .catch((err) => {
        
        console.log(err);
      });
  }, []);

  const updateState = (data) => {
    setId(data._Id);
    setName(data.name);
    setEmail(data.email);
    setFollowers(data.followersIds.length);
    setFollowing(data.followingIds.length);
    setBlogs(props.BlogsList.length);
  };

  const handleFollow = () => {
    setTitle("Following");
    //push in db
  };
  return (
    <React.Fragment>
      <div className="container-box2">
        <div className="avatar-flip">
          <img
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-add-user-icon-png-image_3773557.jpg"
            height="150"
            width="150"
          />
          <img
            src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original"
            height="150"
            width="150"
          />
        </div>
        <h2 className="font-h2">{name}</h2>
        <h4 className="font-h4">{email}</h4>

        <div className="content">
          <div className="data">
            <ul>
              <li>
                {blogs}
                <span>Blogs</span>
              </li>
              <li>
                {followers}
                <span>Followers</span>
              </li>
              <li>
                {following}
                <span>Following</span>
              </li>
            </ul>
          </div>

          <div className="follow">
            {" "}
            <div className="icon-twitter"></div>
            {props.profileId == 0 ? (
              <Link className="follow" to="/myBlogs">
                {title}
              </Link>
            ) : (
              <Link
                className="follow follow-click"
                onClick={() => props.handleFollowing(props.profileId)}
                to="/following"
              >
                {title}
              </Link>
            )}{" "}
          </div>
        </div>
        <br></br>
        <p className="font-p">
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas
          sed diam eget risus varius blandit sit amet non magna ip sum dolore.
        </p>
        <p className="font-p">
          Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla
          non metus auctor fringilla.
        </p>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
