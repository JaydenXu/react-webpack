import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component.jsx';

main();

function main() {
    ReactDom.render(<Hello />, document.getElementById('app'));
}