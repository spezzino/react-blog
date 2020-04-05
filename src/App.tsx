import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import PostsList from "./screens/PostsList";
import { SinglePost } from "./screens/SinglePost";

const App = () => {
  return (
    <Router basename="/blog">
      <div className="App">
        <Switch>
          <Route
            path="/posts/:id"
            render={(props) => <SinglePost {...props} isSingle={true} />}
          />
          <Route path="/" render={(props) => <PostsList {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
