/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var EntryList = require('./EntryList.js');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} = React;

var SearchEntry = React.createClass({
  getInitialState: function(){
    return(
      {
        tagName: '',
        errorMessage: ''
      }
    );
  },
  tagInput: function(e){
    this.setState(
      {
        tagName: e.nativeEvent.text,
      }
    );
  },
  searchEntry: function(){
    this.fetchData();
  },
  fetchData: function(){
    var baseURL = 'https://qiita.com/api/v2/tags/' + this.state.tagName + '/items';
    console.log(baseURL);
    fetch(baseURL)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.title !=='') {
        // this.setState(
        //   {isLoading: false}
        // );
        this.props.navigator.push({
          title: 'Search Results',
          component: EntryList,
          passProps: {entries: responseData}
        });
      }else{
        this.setState({ errorMessage: 'No results found'});
      }
    })
    .catch(error =>
           this.setState({
             errorMessage: error
           }))
           .done();
  },
    viewLoadingData: function(){
        return(
              <View style={styles.activityIndicator}>
              <ActivityIndicatorIOS
              animating={1}
              size={'large'}
              />
              <View>
                 <Text style={styles.loadingMessage}>Pleae wait a second ...</Text>
              </View>
              </View>
            );
      },
  render: function(){
      return(
        <View style={styles.container}>
          <View>
            <Text style={styles.instructions}>Search by tag</Text>
          <View>
            <TextInput style={styles.searchInput} onChange={this.tagInput}/>
          </View>
          </View>
          <TouchableHighlight style={styles.button}
            underlayColor='#000080'
          >
            <Text style={styles.buttonText} onPress={this.searchEntry}>Search</Text>
          </TouchableHighlight>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    padding: 10
  },
  description: {
    fontSize: 18,
    backgroundColor: "#FFFFFF"
  },
  instructions: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15
  },
  searchInput: {
    height: 36,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    flex: 1,
    borderRadius: 4,
    padding: 5
  },
  button: {
    height: 36,
    backgroundColor: '#6495ED',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  errorMessage: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 15,
    color: '#FF4500'
  },
});

module.exports = SearchEntry;
