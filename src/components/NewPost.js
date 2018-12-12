import React from "react";
import PostData from "./PostData";

const NewPost = props => {
  return (
    <div className="New-post">
      <button> Add Post</button>

      <select>
        <option value="work">Work</option>
        <option value="speech">Speech</option>
        <option value="recreation">Recreation</option>
        <option value="sport">Sport</option>
      </select>
      <PostData
        title="My day in Inegrify"
        category="work"
        id="01A"
        getFirstInfo={props.getFirstInfo}
      />
      <PostData
        title="My talk at React Meetup"
        category="Category :Speech"
        id="05b"
        content="Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world"
      />
    </div>
  );
};
export default NewPost;
