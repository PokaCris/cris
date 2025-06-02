import logo from './logo.svg';
import './App.css';
import TestComponent from
import AnotherOneComponent from
import CurrentDate from
import CurrentTime from
import Writers from
import Form from

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from './components/NavMenu';

function App(props) {
  const someFunc = (value) => {
    alert(value)
  }

  const someFunc1 = (value) => {
    console.log(value)
  }

  return (
    <div>
      <Router>
        <div>
        <NavMenu />
        <Routes>
          <Route exact path="/" Component={AnotherOneComponent}></Route>
          <Route exact path="/about" Component={Writers}></Route>
          <Route exact path="/test" Component={TestComponent}></Route>
          <Route component={CurrentTime} />
        </Routes>
        {/*{<AnotherOneComponent/>}*/}
        </div>
      </Router>
      
    </div>
  );
}

export default App;
