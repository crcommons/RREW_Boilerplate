import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import EventPage from './scenes/EventPage';
import EventsDashboard from './scenes/EventsDashboard';

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={EventsDashboard} />
      <Route path="/create" component={EventPage} />
      <Route path="/event/:id" component={EventPage} />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
