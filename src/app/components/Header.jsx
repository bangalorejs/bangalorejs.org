const React = require('react');
const Mui = require('material-ui');
const AppIcons = require('./AppIcons.jsx');

let containerStyle = {
  textAlign: 'center',
  paddingTop: '5px',
  paddingBottom: '10px',
  maxWidth:'1024px',
  margin:'auto',
};
let headerStyle = {
  backgroundColor: '#FF6D00',
  marginBottom: '45px',
  width: '1024px',
  margin: 'auto',
  overflow: 'auto',
};

const Header = React.createClass({
  render() {
    return (<div style={containerStyle}>
      <div style={headerStyle}>
        <h1>BangaloreJS</h1>
        <AppIcons />
      </div>
      <h1 style={{paddingTop: '4em'}}>A community of JavaScript developers organized by JavaScript developers.</h1>
      <h2 style={{paddingBottom: '4em'}}>Join us, meet and organize new meetups. </h2>
      </div>);
  }
});

module.exports = Header;
