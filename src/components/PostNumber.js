import React from "react";
import PostData from "./PostData";

const PostNumber = () => {
  return (
    <div className="New-post">
      <form>
        <PostData
          title=" Title :My day in Inegrify"
          category="Category :Work"
        />
        <h2>Write New Post:</h2>
        <button>Save</button>
        <textarea rows="10" cols="70" name="message" />
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default PostNumber;
