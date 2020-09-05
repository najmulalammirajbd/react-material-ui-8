import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const FullPost = (props) => {
    const{title,id} = props.post
    const history = useHistory();
    const handelClick = (postId) => {
        history.push(`/post/${postId}`)
    }
    const postStyle1 = {
        border:'2px solid gray',
        margin:'10px',
        borderRadius:'5px',
        padding:'10px',
    }
    return (
        <div style={postStyle1}>
           <h4> Post Title : {title}</h4>
           <Button onClick={() => handelClick(id) } variant="contained" color="secondary">See Full Post </Button>
           
        </div>
    );
};

export default FullPost;