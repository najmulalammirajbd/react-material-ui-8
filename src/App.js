import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import SeeFullPost from './components/SeeFullPost/SeeFullPost';
import Comments from './components/Comments/Comments';

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
           <Home/>
          </Route>
          <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <SeeFullPost/>
        </Route>
        <Route path="/comments/:commentsId">
          <Comments/>
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
