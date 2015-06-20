/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var EntryList = require('./EntryList.js');

var {
  StyleSheet,
  NavigatorIOS
} = React;

var FeaturedTab = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Featured Entlies',
          component: EntryList
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = FeaturedTab;
