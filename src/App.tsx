import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './Register';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
