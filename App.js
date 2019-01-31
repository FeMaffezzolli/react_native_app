import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {

  renderList() {
    const names = [
      'Norah Jones',
      'Pearl Jam',
      'Nirvana'
    ];

    const textElements = names.map(name => {
      return <Text>{name}</Text>
    })

    return textElements;
  }

  render() {
    return (
      <View>
        <Header title="People" />
        { this.renderList() }
      </View>
    );
  }
}
