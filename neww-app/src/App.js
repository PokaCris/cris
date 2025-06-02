import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherOneComponent from './containers/AnotherOneComponent';
import CurrentDate from './containers/currentDate';
import CurrentTime from './containers/currentTime';
import Form from './containers/Form';
import Writers from

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
          <Route exact path="/" Component={AnotherOneComponent} />
          <Route exact path="/about/fg" Component={Writers} />
          <Route exact path="/test/:id?" Component={TestComponent} />
          {/* <Route component={CurrentTime} /> */}
        </Routes>
        {/*{<AnotherOneComponent/>}*/}
        </div>
      </Router>
      
    </div>
  );
}

export default App;
