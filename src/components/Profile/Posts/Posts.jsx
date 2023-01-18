import React from "react";
import Post from "./Post/Post";
import S from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <div className="content_new-post">
        <div className="new-post_text">My post</div>
        <div className="new-post_write">
          <input type="text"></input>
          <button>Send</button>
          <div className={S.posts}>
            <Post message="MY NAME IS KRATOS!!! I'M GOD OF WAR" />
            <Post message="My first post" />
            <Post message="GG! Thor is dead" />
            <Post message="I love son" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
