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
            <Post message="MY NAME IS KRATOS!!! I'M GOD OF WAR" count="115670" />
            <Post message="My first post" count="2345" />
            <Post message="GG! Thor is dead" count="424435" />
            <Post message="I love son"  count="infinity"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
