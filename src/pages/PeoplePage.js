import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

  }

  componentDidMount() {
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then(response => {
      const {results} = response.data;
      this.setState({
        people: results
      });
    })
  }

  render() {
    return (
      <View>
        <PeopleList
            onPressItem={() => {
                this.props.navigation.navigate('PeopleDetail')
            }}
            people={this.state.people}
        />
      </View>
    );
  }
}
