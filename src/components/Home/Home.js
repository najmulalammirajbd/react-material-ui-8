import React, { useEffect, useState } from 'react';
import FullPost from '../FullPost/FullPost';

const Post = () => {
    const [post , setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
      }, [])
    return (
        <div>
            {
                post.map(post => <FullPost post={post}></FullPost>)
            }
                        
        </div>
    );
};

export default Post;