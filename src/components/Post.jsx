import React from 'react'

const Post = ({post}) => {
    return(
        <>
            <div className="offset-md-3 mt-4">
                    <h3>{post?.content}</h3>
                    {post?.image && 
                        <img src={URL.createObjectURL(post?.image)} alt={post?.content} 
                        style={{width:"200px",height:"auto",marginBottom:"30px"}} 
                    />}
            </div>
        </>
    )
};

export default Post;
