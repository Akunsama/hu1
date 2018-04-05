import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './pages/home'
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/reducer'
import 'antd/dist/antd.less';
import './less/index.less'

let store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Home></Home>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
