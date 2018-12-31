import React from "react";
import { Link } from "react-router-dom";

const PostDetail = props => {
  let post = props.infos.find(post => {
    return post.postId === props.match.params.postId && post;
  });

  const deletePost = () => {
    props.deletefirstInfo(post.postId);
    props.history.push("/posts");
  };

  console.log("post".props);
  return post ? (
    <div className="New-post">
      <div className="users-output">
        <div>
          <span>Title:{post.title}</span>
          <span> Category:{post.category}</span>
          <span> ID:{post.postId}</span>
          <p> Content:{post.content}</p>
          <button onClick={deletePost}>Delete Post</button>
          <button onClick={props.editInfo}>Edit Post</button>
        </div>
      </div>
    </div>
  ) : (
    <Link to="/posts" />
  );
};

export default PostDetail;
