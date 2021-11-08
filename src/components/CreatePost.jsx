import React, { useState, useRef } from 'react';

const CreatePost = ({setPosts}) => {
    const emptyRef = useRef();
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const posts = {
            content,
            image,
        }
        setPosts((prePosts) => [...prePosts,posts]);

        setContent("");
        setImage("");
        emptyRef.current.value = "";
        emptyRef.current.focus();
    }



    return (
        <>
           <form onSubmit={handleSubmit}>
                <div className="mt-5 offset-md-3">
                    <label className="fw-bold" htmlFor="content">Post Title</label>
                    <input
                        id="content"
                        type="text"
                        placeholder="Write Post Title"
                        className="form-control w-50 mt-2 mb-4"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <label className="fw-bold" htmlFor="images">Upload Post</label>
                    <input
                        id="images"
                        type="file"
                        className="form-control w-50 mt-2 mb-4"
                        onChange={(e) => setImage(e.target.files[0])}
                        ref={emptyRef}
                    />

                    <button type="submit" className="btn btn-outline-success fw-bold">
                        Submit
                    </button>
                </div>
           </form>
        </>
    )
}

export default CreatePost;