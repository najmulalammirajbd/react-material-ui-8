import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const { commentsId } = useParams();
    const [comments ,setComments] = useState({});
        useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${commentsId}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setComments(data));
    } , [])

    const commentsStyle = {
        border:'2px solid gray',
        margin:'10px',
        borderRadius:'5px',
        padding:'10px',
    }
    
    return (
        <div style={commentsStyle}>
            <h3> Name : {comments.name}</h3>
            <h4> Email : {comments.email}</h4>
            <p>  Comments : {comments.body}</p>
        </div>
    );
};

export default Comments;