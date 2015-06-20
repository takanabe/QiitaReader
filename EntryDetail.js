'use strict';

var React = require('react-native');
var {
    WebView
} = React;

var EntryDetail = React.createClass({
  render: function(){
    return(
      <WebView
        url={this.props.url}
      />
    );
  }
});

module.exports = EntryDetail;
