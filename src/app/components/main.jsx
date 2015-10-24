/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Mui = require('material-ui');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
const Colors = require('material-ui/lib/styles/colors');
const fetch = require('isomorphic-fetch');
const API = 'https://api6.min.sh/bangalorejs/events';


const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      data: []
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
      margin:'auto'
    };

    return (
      <div style={containerStyle}>
      <Mui.AppBar style={{backgroundColor: '#FF6D00', marginBottom: '45px'}}
        title="BangaloreJS"
        showMenuIconButton={false} />
        <div>
        {
          this.state.data.events && this.state.data.events.map(function(event){
             return (<Mui.Card initiallyExpanded={false}>
                      <Mui.CardHeader
                      title={event.title}
                      subtitle={event.where}
                      avatar={<Mui.Avatar>J</Mui.Avatar>}
                      actAsExpander={true}
                      showExpandableButton={true}/>
                      <Mui.CardMedia expandable={true}>
                        <img src={event.image}/>
                        <Mui.CardActions>
                            <Mui.FlatButton label="Info" primary={true}/>
                            <Mui.FlatButton label="Map" />
                        </Mui.CardActions>
                      </Mui.CardMedia>
                   </Mui.Card>)

          })
            // this.state.data.users.map(function(user){
            //           return <Mui.Avatar src={user.profile_image} />
            //         })
        }
        </div>
      </div>
    );
  },
  _showMap: function() {
    console.log(map)
  }
});

module.exports = Main;
