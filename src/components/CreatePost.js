import { useState } from "react";
import { db } from "../firebase";
import { useFormInput } from "../hooks";

function CreatePost() {
   const title=useFormInput('');
   const subTitle=useFormInput('');
   const content=useFormInput('');

  function handleSubmit(e){

    e.preventDefault();
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

     const postsCollection = db.collection("posts");
     postsCollection.add({
       title: title.value,
       subTitle: subTitle.value,
       content: content.value,
       // other fields...
     })
     .then((docRef) => {
       console.log("Document written with ID: ", docRef.id);
     })
     .catch((error) => {
       console.error("Error adding document: ", error);
     });
   }

  

  return (
    <div className="create-post">
      <h1>Create Post</h1>
       <form onSubmit={handleSubmit}>
         <div className="form-field">
          <label>Title</label>
          <input {...title}/>
         </div>
         <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle}/>
         </div>
         <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
         </div>

         <button className="create-post-btn">Create Post</button>
       </form>
    </div>
  );
}

export default CreatePost;
