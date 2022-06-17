import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import React from 'react';
import Navigation from './components/Navigation';
import Builder from './components/Builder';
import Collection from './components/Collection';

function App() {

  // const path = useLocation().builder;
  // const location = path.split("/")[1];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation className="nav-page"/>
          </Route>
          <Route exact path="/builder">
            <DndProvider backend={HTML5Backend}>
              <Builder className="builder-page"/>
            </DndProvider>
          </Route>
          <Route exact path="/collection">
            <Collection className="collection-page"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
