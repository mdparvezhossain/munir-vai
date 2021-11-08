import React from 'react';
import Button from '@material-ui/core/Button';
import LogoutIcon from '@material-ui/icons/ExitToApp';

const Header = ({user,setUser}) => {

    const handleClear = () => {
        setUser("");

        localStorage.removeItem("username");
    };
    
    return (
        <>
            <div className="container">
                <h1 className="text-center mt-5">Welcome to <span style={{fontWeight:"bold",color:'red'}}>{user}</span> Our Website </h1>
                <div className="d-flex offset-md-3 mt-5">
                    <h3 style={{marginLeft:"70px"}}>If want to Exit Plz Click</h3>
                    <Button 
                        startIcon={<LogoutIcon />}
                        color="secondary" 
                        variant="contained"
                        style={{marginLeft:"10px"}}
                        onClick={handleClear}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </>
    )
};

export default Header;
