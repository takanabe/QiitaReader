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
  Image,
  ListView,
  TouchableHighlight
} = React;

var TEST_ENTRY_DATA = [
  {
    user: {
      profile_image_url: 'http://facebook.github.io/react/img/logo_og.png',
      id: 'takanabe1'
    },
    title: 'React Native Test1!!'
  },
  {
    user: {
      profile_image_url: 'http://facebook.github.io/react/img/logo_og.png',
      id: 'takanabe2'
    },
    title: 'React Native Test2!!'
  }
];
var entries = TEST_ENTRY_DATA;

var EntryList = React.createClass({
  getInitialState: function(){
    return(
      {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
      }
    );
  },
  componentDidMount: function(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(entries)
    });
  },
  renderEntry: function(entry){
    return(
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <Image
            source={{uri: entry.user.profile_image_url}}
            style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{entry.title}</Text>
              <Text style={styles.name}>{entry.user.id}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },
  render: function() {
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderEntry}
      />
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    name: {
        color: '#656565'
    },
    separator: {
      height: 1,
      backgroundColor: '#DDDDDD',
    },
    listView: {
      backgroundColor: '#F5FCFF'
    },
});

module.exports = EntryList;
