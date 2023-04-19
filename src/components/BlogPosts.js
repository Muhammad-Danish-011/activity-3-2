import classes from './BlogPosts.module.css';
import React, [useEffect, useState] from 'react';

const blogspsots=()=>{
  const [First, setFirst] = useState("");

    useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/posts");
      .then((res)=>res.json());
      .then(data)=>
      {
      setFirst(data) =  data;
      }
    })
},
[]
)
return(
  First && First.map(data)=> <div 
)





function BlogPosts() {
  return <ul classes={classes.list}></ul>;
}
import { useState } from 'react';
import { useEffect } from 'react';




export default BlogPosts;
