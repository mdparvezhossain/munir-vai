import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';

const BASE_URL = "https://api.github.com/users";

const GithubProfile = () => {
    const ClearInputRef = useRef()
    const [userName, setUserName] = useState("");
    const [gitProfile, setGitProfile] = useState([]);

    const gitInfo = async () => {
        const res = await fetch(`${BASE_URL}/${userName}`);
        const data = await res.json();

        if(data){
            setGitProfile(data);
        }
    };
    useEffect(() => {
        gitInfo();
    },[]);

    const handleClear = () => {
        ClearInputRef.current.value = "";
        ClearInputRef.current.focus();
    }

        return (
        <>
            <div className="form-group d-flex mb-3" style={{marginTop:"40px", marginLeft:"100px"}}>
                <input 
                    type="text"
                    placeholder="Search github Users"
                    className="form-control w-25"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    ref={ClearInputRef}
                />
                <Button type="button" onClick={()=> gitInfo(userName)}>Search</Button>
                <Button type="button" onClick={handleClear}>Clear</Button>
            </div>
                <h2>{gitProfile?.name}</h2>
                <img src={gitProfile?.avatar_url} alt={gitProfile?.name} style={{width:"200px"}} />
                <h4>{gitProfile?.bio}</h4>
        </>
    );
};
export default GithubProfile;
