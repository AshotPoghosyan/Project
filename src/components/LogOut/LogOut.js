import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function LogOut() {
    const history = useHistory();

   function handleLogOut(){
       localStorage.removeItem("loggedInUser")
       history.push('/signin')
   }
    return(
        <div>
             <Button color="inherit" onClick={handleLogOut}>Log Out</Button>
        </div>
    )
    
}
