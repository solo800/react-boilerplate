import React from 'react'; // Needed to import react dom
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));