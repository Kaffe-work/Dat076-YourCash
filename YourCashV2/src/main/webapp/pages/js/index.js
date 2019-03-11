//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import FeaturePost from './FeaturePost.js';

ReactDOM.render(
    <div>
        <App />
        <FeaturePost />
    </div>, 
    document.getElementById('root'));
registerServiceWorker();
