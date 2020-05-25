import React from "react";
import BloggerBox from "./BloogerAutherBox";
// import { faHome ,faTwitter,faLinkedin,faFacebook } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
// import { faFacebook, faLinkedin, faTwitter, faHome } from '@fortawesome/fontawesome-free/svgs/solid';
import { Link } from "react-router-dom";

const Blog = (props) => {

  if (props.blogItem.creationTime) {
    var creationTime = props.blogItem.creationTime.slice(0, 10);
  }
  const handleLikeClick = (id) => {
    document.getElementsByClassName(id)[0].classList.toggle("active");
  };
  const handleCommentClick = () => {
    document.getElementsByClassName("comment")[0].style.display = "flex";
  };
  return (
    <React.Fragment>
      <div className="card card-margin">
        <div style={{ width: 710 + "px", margin: 5 + "px" + "auto" }}>
          <div className="bacon-blog-post bacon-shadow flex-container">
            <img
              style={{ padding: 10 + "px" }}
              src={process.env.PUBLIC_URL + "/assets/img1.jpg"}
              className="wp-post-image"
            />

            <div className="bacon-blog-post-inner">
              <div className="header-div">
                <div className="options">
                  <i className="fa fa-chevron-down"></i>
                </div>
                <img
                  className="co-logo"
                  src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-add-user-icon-png-image_3773557.jpg"
                />
                <div className="co-name">
                  <Link
                    href="/profile"
                    onClick={() =>
                      props.handleEmailClick(props.blogItem.userId)
                    }
                    to={"/profile/" + props.blogItem._id}
                  >
                    {props.blogItem.userEmail}
                  </Link>
                </div>
                <div className="time ">
                  <div
                    className="date-span"
                    style={{ display: "inline-block" }}
                  >
                    {creationTime}{" "}
                  </div>
                  · <i className="fa fa-globe"></i>
                </div>
              </div>
              <h3 style={{ marginLeft: 10 + "px" }}>
                <a
                  rel="bookmark"
                  title="Permanent link to Finding What Challenges You"
                  className="title-row"
                >
                  {props.blogItem.title}
                </a>
              </h3>
              <blockquote>
                <p>{props.blogItem.body}</p>
                <div className="tags-container">
                  {props.blogItem.tags
                    ? props.blogItem.tags.map((tag) => (
                        <span className="tags-span">#{tag}</span>
                      ))
                    : null}
                </div>
                <div className="flex-container-row">
                  <p>
                    — Article By :{" "}
                    <Link
                      href="http://amzn.to/28INctw"
                      onClick={() =>
                        props.handleEmailClick(props.blogItem.userId)
                      }
                      to={"/profile/" + props.blogItem._id}
                    >
                      {props.blogItem.userEmail}
                    </Link>
                  </p>
                  <div
                    className="outlineSocialShare"
                    style={{ transform: "translateY(-20px)" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    type="button"
                    title="View Profile"
                  ></div>
                </div>
              </blockquote>
              <div className="outlineSocialShare">
                <Link to={"/profile/" + props.blogItem._id}>
                  <i
                    className="fa fa-eye "
                    onClick={() =>
                      props.handleEmailClick(props.blogItem.userId)
                    }
                  ></i>
                </Link>
                <i
                  className={"fa fa-thumbs-up like " + props.blogItem.userId}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Like"
                  onClick={() => handleLikeClick(props.blogItem.userId)}
                ></i>
                <i
                  className="fa fa-comments  "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Comment"
                ></i>
                <i
                  className="fa fa-share"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Share"
                ></i>
                <i
                  className="fa fa-twitter"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                ></i>
                <i
                  className="fa fa-linkedin"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="LinkedIn"
                ></i>
                <i
                  className="fa fa-facebook"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                ></i>

                {/* <FontAwesomeIcon icon={faHome} />
   <FontAwesomeIcon icon={faTwitter} />
   <FontAwesomeIcon icon={faLinkedin} />
   <FontAwesomeIcon icon={faFacebook} /> */}
              </div>

              <div className="items comment">
                <div className="flex-container-row">
                  <p className="comment-text .bacon-blog-post p"> comment </p>
                  <input
                    className="card comment text-l-left "
                    style={{ height: 3 + "rem" }}
                    type="text"
                    placeholder="  Add your Comment here ..."
                    vlaue=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
