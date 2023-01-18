import React from "react";
import P from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={P.content_history}>
      <div className={P.item}>
        <img src="https://i.pinimg.com/474x/bc/4c/59/bc4c59e9d6d9f03153bd9a197a2384ba.jpg"></img>
        {props.message}
        <div>like</div>
      </div>
    </div>
  );
};

export default Post;
