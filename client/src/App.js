import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Builder from './components/Builder';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
          </Route>
          <Route exact path="/builder">
            <Builder />
          </Route>
          <Route exact path="/collection">
            <Collection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
