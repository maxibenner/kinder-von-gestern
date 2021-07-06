import React from "react";
import s from "../styles/FacebookPost.module.css";

const FacebookPost = ({ post }) => {
  return (
    <div className={s.container}>
      <h2>{post.title}</h2>
      <p>{post.created}</p>
      <p className={s.body}>
        {post.body}
      </p>
      <img src={post.imgSrc} />
    </div>
  );
};

export default FacebookPost;
