import React from "react";
const Follow = (props) => {
  return (
    <React.Fragment>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{props.blogger.name}</h5>
          <p class="card-text">{props.blogger.email}</p>
          <div class="content">
            <div class="data">
              <ul>
                <li>
                  {props.blogger.BlogsIds.length}
                  <span>Blogs</span>
                </li>
                <li>
                  {props.blogger.followingIds.length}
                  <span>Followers</span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" class="btn btn-primary">
            View Profile
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Follow;
