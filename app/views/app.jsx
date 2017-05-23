import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class App extends Component{
    render() {
        return (
            <div>
                <h1>I am App page</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
            </div>
        )
    }
}