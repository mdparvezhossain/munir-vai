import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import Header from './Header';
import Login from './Login';
import PostList from './PostList';


const Home = () => {
    const [user,setUser] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = localStorage.getItem("username")
        setUser(getData);

        document.title = user? `${user}'s feed'` : "Login Page";
    },[user]);

    if(!user){
        return <Login setUser={setUser} />
    };

    return (
        <>
            <Header user={user} setUser={setUser} />
            <CreatePost setPosts={setPosts} />
            <PostList posts={posts} />
        </>
    )
}

export default Home;
