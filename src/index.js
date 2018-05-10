import "./css/index.css";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import registerServiceWorker from "./components/registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById("root"));
//registerServiceWorker();
