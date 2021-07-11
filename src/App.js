import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MyProducts from './components/ProfilePage/Products/MyProducts';
import Error from './components/error';


function App(loggedIn) {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
         <Route  path={'/'} exact component={HomePage}/>
         <Route  path={'/profile'} exact component={ProfilePage}/>
         <Route  path={'/signup'} exact component={SignUp}/>
         <Route path={'/signin'} component={SignIn}/>
         <Route  path={'/myProducts'} exact component={MyProducts}/>
         <Route  path={'/error'} exact component={Error}/>
         
         
     </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
