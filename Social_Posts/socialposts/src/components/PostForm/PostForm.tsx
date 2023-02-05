import * as React from 'react';
import { useState } from 'react';
import { ButtonToggle } from 'reactstrap';
import "./postForm.css";

export interface PostFormProps {
    addPost: Function
}

export function PostForm (props: PostFormProps) {
    
    let [title, setTitle] = useState<string>('');
    let [thought, setThought] = useState<string>('');

    function onSubmitForm(e:React.FormEvent<HTMLElement>){
        e.preventDefault();
        props.addPost({title: title, thought: thought})
    }

    // The lab has us use this callback prop when the 'close' icon is clicked
    // Seemed a lot simpler to just add this to the modal
    // Though I understand that part of this may have been to practice callback props
    function onClose(){
    }
  
    return (
    <div className="container-form">
        {/* <div><i onClick={onClose} className="fa-sharp fa-solid fa-circle-xmark"></i></div> */}
        <div className="form">
            <form onSubmit={onSubmitForm}>
                <label>Title</label>
                <input type="text" placeholder="Enter text here" onChange={(e) => setTitle(e.target.value)} />
                <label>Thought</label>
                <input type="text" id="newThought" placeholder="Enter text here" onChange={(e) => setThought(e.target.value)} />
                <button type="submit" onSubmit={onSubmitForm}>Add Post</button>
            </form>
        </div>
    </div>
  );
}
