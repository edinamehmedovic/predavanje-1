import './App.css';
import React from 'react';
import Component1 from "./components/styles/component1/Component1";
import Component2 from "./components/styles/component2/Component2";
import StyledComponent from "./components/styles/styledComponent/StyledComponent";
import NavbarTop from "./components/navbarTop/NavbarTop";
import Movies from "./pages/movies/Movies";


function App() {

  return (
    <div className="App">
        <NavbarTop/>
        <Component1 className="some-class" hasClass/>
        <Component1 className="some-class"/>
        <Component2 />
        <StyledComponent/>
        <StyledComponent backroundColor="yellow"/>
        <Movies/>
    </div>
  );
}

export default App;
