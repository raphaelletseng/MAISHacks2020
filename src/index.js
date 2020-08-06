import React from 'react';
import ReactDOM from 'react-dom';
//import ReactGA from 'react-ga';

import App from './App';

// Export your top level component as JSX (for static rendering)
export default App;

//ReactGA.initialize('UA-139993353-2');
//ReactGA.pageview('/');

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(React.createElement(Comp), document.getElementById('root'));
  };

  // Render!
  render(App);
}
