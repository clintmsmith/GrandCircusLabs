import { title } from 'process';
import * as React from 'react'
import { Post } from "../../interfaces/Post";
import "./postInList.css"

interface PostInListProps {
  post: Post,
}

function PostInList (props: PostInListProps) {

  function onDelete(){
  };

  return (
    <div className="post">
      <div className="post-main">
        <h3>{props.post.title}</h3>
        <p>{props.post.thought}</p>
      </div>
      <div className="post-trash" onClick={onDelete}><i className="fa-solid fa-trash"></i></div>
    </div>
  );
};

export default PostInList;
