import React from "react";
import { useState, useEffect } from "react";
import classes from './NewPost.module.css';

function NewPost({setPosts}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [newArticle, setNewArticle] = useState({ title: ''});
  const [first, setFirst] = useState([]);

  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
      .then(res => res.json())
      .then(data => {
        setPosts(posts => [...posts, data]);
        setNewArticle({ title: ''});
      })

    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default NewPost;
