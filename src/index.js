import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Invitecontainer from './containers/invitecontainer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configStore';
import {Provider} from 'react-redux'





ReactDOM.render(<Provider store={configureStore}><Invitecontainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
