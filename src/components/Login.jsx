import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/AccountCircle';

const Login = ({setUser}) => {
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser(userName);

        localStorage.setItem("username", userName);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h5 style={{color:"teal", marginLeft:"370px",fontWeight:"bold"}}>Please Login First</h5>
                <div className="d-flex mt-5 offset-md-3">
                    <input 
                        type="text"
                        placeholder="Enter Users Name"
                        className="form-control w-25"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Button type="submit" endIcon={<LoginIcon />}  color="primary" variant="contained">
                        Login
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Login;
