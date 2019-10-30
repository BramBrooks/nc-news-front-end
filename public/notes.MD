<!-- Created a /static/script directory?
The thing about React is that if you're going to be using JSX, you want to have one directory for your original JSX files, another directory for your compiled JS files, and another directory for your actual distribution. Thus, you need three directories:
Do you have a /static/script/jsx directory to hold your JSX files?
Do you have a /static/script/js directory to hold your compiled JS files?
Do you have a /static/script/build directory to hold your final, compacted index.js?
The compile pipeline looks something like this: /jsx/*.jsx -compile-> /js/*.js -compact-and-minify-> /build/index.js
Created /static/jsx/app.jsx?
The contents of this file must:
Require and define the React package: var React = require('react');
Define the App component: var App = React.createClass({ ... });
Render the App component: React.render(<App />, document.getElementById('app')); -->
