import React from "react";
import { Link } from "react-router-dom";

const Posts = props => {
  // let {match} = props
  console.log(props);

  return (
    <div className="Post-main">
      <ul>
        <li>
          <Link to="/newpost">New Post</Link>
        </li>
      </ul>

      <div className="Add-post">
        <div className="Add-post-header">
          <h1> Post Content</h1>
          <div className="users-output">
            {props.infos.map((post, i) => {
              return (
                <div key={"id-" + i}>
                  <Link to={`/posts/${post.postId}`}>
                    <span>Title:{post.title}</span>
                    <span> Category:{post.category}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
