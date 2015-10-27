const React = require('react');
const Mui = require('material-ui');

let containerStyle = {
  paddingTop: '5px',
  paddingBottom: '10px',
  maxWidth:'1024px',
  margin:'auto',
};
let headerStyle = {
  marginBottom: '45px',
  width: '1024px',
  margin: 'auto',
  overflow: 'auto',
};
let socialIcons ={
  overflow: 'auto',
  width: '393px',
  margin: 'auto',
};


const Header = React.createClass({
  render() {
    return (<div style={containerStyle}>
      <div style={headerStyle}>
        <img style={{width:'100px'}} src="http://bangalorejs.org/images/logo.png"/>
      </div>
      <h1 style={{paddingTop: '1em', fontSize:'1.8em'}}>A community of JavaScript developers organized by JavaScript developers.</h1>
      <h2>Join us, meet and organize new meetups. </h2>
      <h2 style={{paddingBottom: '2em', paddingTop: '2em', fontSize:'1.2em', color: '#666'}}>Download Official Bangalore javascript community app</h2>
      <div style={socialIcons}>
        <a style={{float:'left',}} href="http://min.sh/bjs_play">
          <img style={{width:'130px'}} src="http://bangalorejs.org/images/android3.png" />
        </a>
        <a style={{float:'left',}} href="http://min.sh/bjs_ios">
          <img style={{width:'130px'}} src="http://bangalorejs.org/images/ios3.png" />
        </a>
        <a style={{float:'left',}} href="http://min.sh/bjs_wp">
          <img style={{width:'130px'}} src="http://bangalorejs.org/images/wp3.png" />
        </a>
      </div>
      <div className="featuresText">
        <ul>
          <h4>Features</h4>
          <li>Always stay informed about the next JavaScript-related events,</li>
          <li>Ask all your questions, get feedback instantly from fellow developers,</li>
          <li>Take part in live discussions with other JavaScript experts,</li>
          <li>Get to know the other BangaloreJS community members near you.</li>
        </ul>
      </div>
      </div>);
  }
});

module.exports = Header;
