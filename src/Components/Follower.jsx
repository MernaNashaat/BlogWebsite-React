import React from "react";
import { Link } from "react-router-dom";
const Follower = (props) => {
  
  console.log(props.CurrentFollower);
  return (
    <React.Fragment>
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
          <h2 className="font-h2">{props.CurrentFollower.name}</h2>
          <h4 className="font-h4">{props.CurrentFollower.email}</h4>

          <div className="content">
            <div className="data">
              <ul>
                <li>
                  {props.CurrentFollower.BlogsIds.length > 0
                    ? props.CurrentFollower.BlogsIds.length
                    : 0}
                  <span>Blogs</span>
                </li>
                <li>
                  {props.CurrentFollower.followersIds.length > 0
                    ? props.CurrentFollower.followersIds.length
                    : 0}
                  <span>Followers</span>
                </li>
                <li>
                  {props.CurrentFollower.followingIds.length > 0
                    ? props.CurrentFollower.followingIds.length
                    : 0}
                  <span>Following</span>
                </li>
              </ul>
            </div>

            <div className="follow">
              {" "}
              <div className="icon-twitter"></div>{" "}
              <Link className="follow" id={props.CurrentFollower._id} to="/">
                View Profile
              </Link>{" "}
            </div>
          </div>
          <br></br>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default Follower;
