import React from "react";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div>
      <div className="content_new-post">
        <div className="new-post_text">My post</div>
        <div className="new-post_write">
          <input type="text"></input>
          <button>Send</button>
        </div>
      </div>
      <Post />
    </div>
  );
};
export default Posts;
