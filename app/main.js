import React from 'react';
import ReactDom from 'react-dom';
// import {Router, Route, Link} from 'react-router';       //using react-router v4 you need to install react-router-dom as well
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';

import App from './views/app.jsx';
import About from './views/about.jsx';
import Inbox from './views/inbox.jsx';

main();

function main() {
    ReactDom.render(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/inbox" component={Inbox}/>
            </div>
        </BrowserRouter>
        , document.getElementById('app'));
}