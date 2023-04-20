import classes from './BlogPosts.module.css';
import React from "react";
import {useEffect, useState} from 'react';


  




function BlogPosts() { 
  const [First, setFirst] = useState([]);

    useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((data)=>
      {
      setFirst(data)
      }
    )}
,
[])
    }


  // return <ul classes={classes.list}>
    
  //   <div>[]</div>
    
    
  //   </ul>;





export default BlogPosts;
