const React = require('react');
const FontAwesome = require('react-fontawesome');

let iconStyle = {
  textDecoration: 'none',
  padding: '5px',
  color: 'white'
};

const AppIcons = React.createClass({
  render() {
    return (
     <div>
        <a href="http://min.sh/bjs_play" className="fa fa-play"  style={iconStyle}/>
        <a href="http://min.sh/bjs_ios" className="fa fa-apple"  style={iconStyle}/>
        <a href="http://min.sh/bjs_wp" className="fa fa-windows" style={iconStyle}/>
     </div>
    );
  }
});

module.exports = AppIcons;
