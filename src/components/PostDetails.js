import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

function PostDetails() {
  
  const [post, setPost]=useState({});
  const { postid }=useParams();

  useEffect(() => {
    db.collection('posts').doc(postid).get().then((snapshot) => {
      console.log('snapshot', snapshot.data());
      setPost(snapshot.data());
    });
  }, [postid]);
  

  return (
    <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  );
}

  export default PostDetails;