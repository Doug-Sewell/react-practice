import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyInfo from './components/MyInfo';


ReactDOM.render(<MyInfo />, document.getElementById('root'));


serviceWorker.unregister();
