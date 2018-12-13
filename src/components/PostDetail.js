import React from "react";

const PostDetail = props => {
  return (
    <div className="New-post">
      <div className="users-output">
        {props.infos.map((info, i) => {
          return (
            <div key={"id-" + i}>
              <span>Title:{info.title}</span>
              <span> Category:{info.category}</span>
              <span> ID:{info.postId}</span>
              <p> Content:{info.content}</p>
              <button onClick={props.deletefirstInfo}> Delete Post</button>
              <button onClick={props.editInfo}>Edit Post</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostDetail;
