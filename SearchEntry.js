/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var SearchEntry = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <Text style={styles.description}>This is Search Entry Component !!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    backgroundColor: "#FFFFFF"
  }
});

module.exports = SearchEntry;
