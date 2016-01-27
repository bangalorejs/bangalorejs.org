/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Mui = require('material-ui');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const fetch = require('isomorphic-fetch');
const Map = require('./Maps.jsx');
const Header = require('./Header.jsx');
const API = 'https://api6.min.sh/bangalorejs/events';

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      data: [],
      showMap: false
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500
    });

    this.setState({muiTheme: newMuiTheme});
  },

  componentDidMount() {
    fetch(API)
    .then(function(data){ return data.json()})
    .then(function(data){
      this.setState({data: {
        events: data.events,
        users: data.users
      }})
    }.bind(this));
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '5px',
      paddingBottom: '10px',
      maxWidth:'1024px',
      margin:'auto',
      height:'200px'
    };

    return (
          <div style={containerStyle}>
              <Header />
              <div>
                {
                  this.state.data.events && this.state.data.events.map(function(event){
                     return (<Mui.Card initiallyExpanded={true} style={{marginBottom:'7em', marginTop: '1em'}}>
                              <Mui.CardHeader
                              title={event.title}
                              subtitle={event.where + ':' + new Date(event.when)}
                              avatar={<Mui.Avatar>J</Mui.Avatar>}
                              actAsExpander={true}
                              showExpandableButton={true}/>
                              <Mui.CardMedia expandable={true}>
                               {this.state.showMap ?
                                //Need to fix this
                                <Map lat={event.geo[1]} lng={event.geo[0]} /> :
                                <img src={event.image}/>}
                                <Mui.CardActions>
                                    <Mui.FlatButton label="Info" primary={true} onClick={this._hideMap}/>
                                    <Mui.FlatButton label="Map" onClick={this._showMap}/>
                                </Mui.CardActions>
                              </Mui.CardMedia>
                           </Mui.Card>)

                  }, this)
                }
              </div>
          </div>
    );
  },
  _showMap: function() {
    this.setState({showMap: true});
  },
  _hideMap: function() {
    this.setState({showMap: false});
  }
});

module.exports = Main;
