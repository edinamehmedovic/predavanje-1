import './App.css';
import MyImage from "./components/myImage/MyImage";
import Table from "./components/table/Table";
import IdCard from "./components/idCard/IdCard";
import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*  <FuncComponent/>*/}
      {/*</header>*/}
    <MyImage/>
      <Table/>
      <Wrapper>
        <IdCard name="Edina" surname="Mehmedovic" src="logo192.png"/>
        <IdCard name="Ana" surname="Markovic" src="logo512.png"/>
        <IdCard name="Ana 1" surname="Markovic" city="Cetinje" src="logo192.png"/>
      </Wrapper>
      <Wrapper children={
        <>
          <IdCard name="Edina" surname="fdfgdsg" src="logo192.png"/>
          <IdCard name="Ana" surname="Mardgdsgkovic" src="logo512.png"/>
          <IdCard name="Ana 1" surname="Magdsfdsrkovic" city="Cetinje" src="logo192.png"/>
        </>
      }/>

    </div>
  );
}

export default App;
