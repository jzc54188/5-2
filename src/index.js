<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

=======
import ReactDOM from "react-dom"
import Routes from "./components/Routes"
import { Provider } from "react-redux"
import store, { history } from "./store"
import { ConnectedRouter } from "connected-react-router"
import "./style.css"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
>>>>>>> c8f49eefa9e7b8608d75fe060ca32fe5d17a8658
