import React from "react";

const PostData = props => {
  return (
    <div className="Main">
      <div className="Post-data" onClick={props.getFirstInfo}>
        <span>{props.title}</span>
        <span> {props.category}</span>
        <span>{props.id}</span>
        <p>{props.content}</p>
        <div className="Post-info" />
      </div>
    </div>
  );
};

export default PostData;
