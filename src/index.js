import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import TodoApp from './containers/todos';
import CanvasApp from './components/canvasApp';
import { BrowserRouter, Route, Link } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todo'>TodoApp</Link></li>
        <li><Link to='/canvas'>CanvasApp</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/todo' component={TodoApp} />
      <Route path='/canvas' component={CanvasApp} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
