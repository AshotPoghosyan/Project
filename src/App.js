import { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MyProducts from './components/ProfilePage/Products/MyProducts';
import Error from './components/error';


function App() {
  const [loggedIn, setLoggedIn] = useState("")
  // localStorage.clear();
  // localStorage.removeItem("loggedInUser");
  // localStorage.removeItem("Products");

  useEffect(() => {
     setLoggedIn(localStorage.getItem("loggedInUser"))
  }, [])

  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
         <Route  path={'/'} exact component={HomePage}/>
         <Route  path={'/signup'} exact component={SignUp}/>
         <Route path={'/signin'} component={SignIn}/>
         <Route  path={'/profile'} exact component={ProfilePage}/>
         <Route  path={'/myProducts/:id'} exact component={MyProducts}/>
         <Route  path={'/error'} exact component={Error}/>
        {/* {
          loggedIn
            ? <Route path="/profile" component={ProfilePage} />
            : <Route path="/signin" component={SignIn} />
        } */}
     
     </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
