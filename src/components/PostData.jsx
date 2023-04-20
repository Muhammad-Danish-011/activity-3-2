import React from "react";
import {useEffect, useState} from 'react';
function PostData() { 
  const [first, setFirst] = useState([]);

    useEffect(()=>{

      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>res.json())
      .then((data)=>
      {
      setFirst(data);
      }
    )}
,
[])
   
 return(
        first.map((data)=>
        <div style={{marginLeft:'20px',padding:'10px' ,border:'1px solid #000',backgroundColor:'#ccc'}}>
        <h1>{data.title}</h1>
        <p>body:{data.body}</p>
        </div>)
    )
    }

//   return <ul classes={classes.list}>
    
//     <div>[]</div>
    
    
//     </ul>;





export default PostData;
