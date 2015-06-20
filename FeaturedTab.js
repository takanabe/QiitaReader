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

var FeaturedTab = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is Featured Tab !!</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 15,
    backgroundColor: '#FFFFFF'
  }
});

module.exports = FeaturedTab;
