/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchEntry = require('./SearchEntry.js');

var {
  StyleSheet,
  NavigatorIOS
} = React;

var SearchTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search Entlies',
          component: SearchEntry
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = SearchTab;
