import React from "react";
import axios from "axios";
import { ReactDOM } from "react-dom";
const BlogListItem = (props) => {
  if (props.BlogsList.creationTime) {
    
    var creationTime = props.BlogsList.creationTime.slice(0, 10);
  }

  const EditClicked = (id) => {
    
    props.history.push({
      pathname: "/add",
      search: `?id=${id}`,
      state: { detail: props.BlogsList },
    });
  };
 
  return (
    <React.Fragment>
      <div>
        <div className="post__card blog-post-card" id={props.BlogsList._id}>
          <div className="post__card_-">
            <div
              className="post__card__image"
              style={{
                backgroundImage:
                  "url('http://i2.wp.com/garybacon.com/wp-content/uploads/2016/06/finding_what_challenges.png')",
              }}
            ></div>
            <div>
              <div className="post__card_meta">
                <p className="post__card_title">{props.BlogsList.title}</p>
                {props.BlogsList.creationTime ? (
                  <span className="date-span"> {creationTime}</span>
                ) : null}

                <p className="post__card_alttitle">{props.BlogsList.body}</p>
                <div className="tags-container">
                  {props.BlogsList.tags
                    ? props.BlogsList.tags.map((tag) => (
                        <span className="tags-span">#{tag}</span>
                      ))
                    : null}
                </div>
              </div>

              <div class="content flex-container-row">
                <div class="data">
                  <ul className="ulContainer">
                    <li>
                      200
                      <span>Likes</span>
                    </li>
                    <li>
                      150
                      <span>Comments</span>
                    </li>
                  </ul>

                  <div className="buttons-container">
                    <div
                      className="btn-group btn-blogForm-container"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-info btn-sm btn-margin"
                        onClick={() => EditClicked(props.BlogsList._id)}
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-margin"
                        onClick={() => props.handleDelete(props.BlogsList._id)}
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogListItem;
