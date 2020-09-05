import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SeeFullPost = () => {
    const {postId} =useParams();
    const [post ,setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setPost(data));
    } , [])

    const postStyle2 = {
        border:'2px solid gray',
        margin:'10px',
        borderRadius:'5px',
        padding:'10px',
    }
    const history = useHistory();
    const handelClick = (commentsId) => {
        history.push(`/comments/${commentsId}`)
    }
    return (
        <div style={postStyle2}>
           <h4>Post Title : {post.title}</h4>
           <p> Post : {post.body}</p>
           <Button onClick={() => handelClick(post.id) }  variant="contained" color="secondary">See Comment </Button>

        </div>
    );
};

export default SeeFullPost;