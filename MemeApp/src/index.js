import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MemeApp from "./MemeApp.js"

ReactDOM.render(<MemeApp />, document.getElementById("root"));
serviceWorker.unregister();
