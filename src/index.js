import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ConnectedApp from './components/App'
import reportWebVitals from './reportWebVitals'
import middleware from './middleware'
import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers, middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
