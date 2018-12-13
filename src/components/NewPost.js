import React from "react";
import { Link } from "react-router-dom";

const NewPost = props => {
  return (
    <div className="New-post">
      <div className="input-Post">
        <div className="input-button">
          <Link to="/posts">
            <button onClick={props.getFirstInfo}>Add Post</button>
          </Link>
        </div>
        <div className="input-data">
          <select
            name="selectOption"
            value={props.selectOption}
            onChange={props.handleChange}
          >
            <option value="Work">Work</option>
            <option value="Speech">Speech</option>
            <option value="Recreation">Recreation</option>
            <option value="Sport">Sport</option>
          </select>
          Title:
          <input type="text" onChange={props.inputTitle} />
          Category:
          <input value={props.selectOption} />
        </div>
        Content:
        <textarea
          rows="10"
          cols="70"
          name="message"
          onChange={props.inputContent}
        />
      </div>
    </div>
  );
};
export default NewPost;
