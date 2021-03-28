import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Upload from './components/Upload/Upload';
import Age from './components/Age/Age';
import Location from './components/Location/Location';
import Gender from './components/Gender/Gender';
import Weight from './components/Weight/Weight';
import SignIn from './components/SignIn/SignIn';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Group from './components/Group/Group';
import RequestScreen from './components/RequestScreen/RequestScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <SignIn></SignIn>
        </Route>
      </Switch>
      <Switch>
        <Route path="/home">
        <SignIn></SignIn>
        </Route>
      </Switch>
      <Switch>
      <Route path="/header">
        <Header></Header>
        </Route>
      </Switch>
      <Switch></Switch>
      <Switch>
      <Route path="/upload">
        <Upload></Upload>
        </Route>
      </Switch>
      <Switch>
      <Route path="/age">
        <Age></Age>
        </Route>
      </Switch>
      <Switch>
      <Route path="/location">
        <Location></Location>
        </Route>
      </Switch>
      <Switch>
      <Route path="/gender">
        <Gender></Gender>
        </Route>
      </Switch>
      <Switch>
      <Route path="/weight">
        <Weight></Weight>
        </Route>
      </Switch>
      <Switch>
      <Route path="/about">
        <About></About>
        </Route>
      </Switch>
      <Switch>
      <Route path="/contact">
        <Contact></Contact>
        </Route>
      </Switch>
      <Switch>
      <Route path="/group">
        <Group></Group>
        </Route>
      </Switch>
      <Switch>
      <Route path="/requestScreen">
        <RequestScreen></RequestScreen>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
