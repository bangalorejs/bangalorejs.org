(function () {
  let React = require('react');
  let ReactDOM = require('react-dom');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  let Main = require('./components/main.jsx');

  window.React = React;
  injectTapEventPlugin();
  ReactDOM.render(<Main />, document.getElementById('app'));
})();
