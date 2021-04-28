import './App.css';
import MyImage from "./components/myImage/MyImage";
import Table from "./components/table/Table";
import IdCard from "./components/idCard/IdCard";
import Wrapper from "./components/wrapper/Wrapper";
import ChildElement from "./components/childElement/ChildElement";
import {logToConsole, logToConsole2, mapArray} from "./functions/examples";
import {wrapperElements} from "./functions/wraapperElements";
import Counter from "./components/counter/Counter";
import MyData from "./contexts/MyData";
import React from 'react';
import ReducerExample from "./components/reducerExample/reducerExample";
import DebouncedSearch from "./components/debouncedSearch/DebouncedSearch";
import Movies from "./pages/movies/Movies";

function App() {

  return (
    <div className="App">

    {/*<MyData.Provider value={{data: wrapperElements, name: 'Ana'}}>*/}
      <Movies/>
    {/*</MyData.Provider>*/}

    </div>
  );
}

export default App;
