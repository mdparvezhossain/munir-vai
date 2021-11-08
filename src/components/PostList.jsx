import React from 'react';
import Post from './Post';

const PostList = ({posts}) => {
    return(
        <>
            <div className="mt-5">
                {
                    posts.map((post , index) => {
                      return  <Post post={post} key={index} />
                    })
                }
            </div>
        </>
    )
};

export default PostList;
