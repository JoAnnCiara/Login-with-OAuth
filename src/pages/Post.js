import React from 'react';
import { useLocation } from "react-router";
import { posts } from "../data";



const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  
  return (
    <React.Fragment>
      <div className="post" key={post.id}>  
        <img className="postImg" src={post.img}  alt=""  />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
      </div>
    </React.Fragment>
  );
};

export default Post;