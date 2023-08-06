import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Styled, styled } from "styled-components";


const BlogHeading=styled.h1`
text-align: center;
color: #2196f3;
margin-bottom: 2px;
`;


function Home() {
  
  const [posts, setPosts]=useState([]);

  useEffect(()=>{
        db.collection('posts')
                  .get()
                  .then((snapshot)=>{
             const posts=snapshot.docs.map((doc)=>{ 
                   return {
                      id: doc.id,
                      ...doc.data(),
                   };
             });
             setPosts(posts);
            // console.log('posts', posts);
        })
  }, [])

  return (
    <div className="home">
        <BlogHeading>Tech Blog</BlogHeading>
        <div id="blog-by">Avas</div>
        {
          posts.map((post, index) => (
            <div className="post" key={`post-${index}`}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.subTitle}</p>
            </div>
          ))
        }


    </div>
  );
  }

 export default Home;

 const styles={
      heading:{
        marginTop: 30,
        fontSize: 50
      }
 }