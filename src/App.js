import './App.css';
import React from 'react';
import {Switch} from 'react-router-dom';
import Movies from "./pages/movies/Movies";
import Styling from "./pages/styling/Styling";
import People from "./pages/people/People";
import Administration from "./pages/administration/Administration";
import Person from "./pages/people/Person";
import Login from "./pages/login/Login";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {

  return (
    <div className="App">
        <Switch>
            <PrivateRoute path="/movies" exact component={Movies} isPrivate/>
            <PrivateRoute path="/styling" exact component={Styling} isPrivate/>
            <PrivateRoute path="/people" exact component={People} isPrivate/>
            <PrivateRoute path="/people/:name" exact component={Person} isPrivate/>
            <PrivateRoute path="/administration" component={Administration} isPrivate/>
            <PrivateRoute path="/login" component={Login}/>
        </Switch>
    </div>
  );
}

export default App;
