import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserProfile from "./UserProfile";
import Follower from "./Follower";
const ProfileList = (props) => {

  props.handleFollowers();
  props.handleFollowingLoad();
  let condition =
    props.myFollowers.length > 0 || props.myFollowings.length > 0
      ? true
      : false;

  return (
    <React.Fragment>
      <div className="flex-container-row">
        {condition
          ? props.myFollowers.length === 0 && props.myFollowings.length > 0
            ? props.myFollowings.map((follower) => (
                <Follower
                  key={follower._id}
                  CurrentFollower={follower}
                  handleFollowing={props.handleFollowing}
                />
              ))
            : props.myFollowings.length === 0 && props.myFollowers.length > 0
            ? props.myFollowers.map((follower) => (
                <Follower
                  key={follower._id}
                  CurrentFollower={follower}
                  handleFollowing={props.handleFollowing}
                />
              ))
            : null
          : null}
      </div>
    </React.Fragment>
  );
};

export default ProfileList;
