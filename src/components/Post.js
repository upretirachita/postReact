import React from "react";
import { Link, Route } from "react-router-dom";
import PostNumber from "./PostNumber";
import NewPost from "./NewPost";
import PostData from "./PostData";

const Post = props => {
  // let {match} = props
  console.log(props);

  return (
    <div className="Post-main">
      <ul>
        <li>
          <Link to={`${props.match.path}/newpost`}>New Post</Link>
        </li>
      </ul>
      <Route path={`${props.match.path}/postnumber`} component={PostNumber} />
      <Route path={`${props.match.path}/newpost`} component={NewPost} />
      <div className="Add-post">
        <div className="Add-post-header">
          <h1>Add Post</h1>

          <button>
            <li>
              <Link to={`${props.match.path}/postnumber`}>Add Post</Link>
            </li>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
