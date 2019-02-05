import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Line from '../components/Line';

export default class PeopleDetailPage extends Component {
  render() {
    const { person } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: person.picture.large }}
            />
        <View style={styles.detailContainer}>
            <Line label="Email:" content={person.email} />
            <Line label="Cidade:" content={person.location.city} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop      : 20,
        elevation      : 1
    }
})
