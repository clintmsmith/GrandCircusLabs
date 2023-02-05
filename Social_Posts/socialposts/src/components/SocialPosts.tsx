import * as React from 'react';
import { Post } from '../interfaces/Post';
import { PostForm } from "./PostForm/PostForm";
import PostInList from './PostInList/PostInList';
import "../App.css"
import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import "../components/PostForm/postForm.css";


interface SocialPostsProps {
    posts: Post[]
};

function SocialPosts () {
  // State Hook with hard coded starting info
  const [posts, setPosts] = React.useState<Post[]>(
    [
    {title: "Grand Circus", thought: "Grand Circus is cool."},
    {title: "React", thought: "React give me power!"},
    {title: "Beatrice", thought: "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her! More text here, then more, then even more."},
    ]
  );


  // Add new post via callback prop fround in PostForm.tsx
  function addPost(post:Post){
    setPosts([post, ...posts]);
  };

  
  function deletePost(post:Post){
  }


  // Modal implementation
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  // This was meant to be a callback prop that was called in PostForm.tsx
  // But it seems a lot simpler to just add this to the ModalBody below
  // Though I understand that part of this may have been to practice callback props
  function submitCloseModal(){
  }


  // Use of modal to display PostForm.tsx and map the state 'posts'
  // per PostInList.tsx props
  return (
    <div className="Main">
      <div className="newThought">
        <button onClick={toggle}>New Thought</button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
          <>
          <div><i onClick={toggle} className="fa-sharp fa-solid fa-circle-xmark"></i></div>
          <PostForm addPost={addPost} />
          </>
          </ModalBody>
        </Modal>
      </div>
      <div className="container-posts">
        {posts.map((post) => <PostInList post={post} key={post.title}/>)}
      </div>
    </div>
  );
}

export default SocialPosts;