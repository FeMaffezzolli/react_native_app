import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

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
            <View style={styles.line}>
                <Text style={[styles.cell, styles.label]}>Email: </Text>
                <Text style={styles.cell}> {person.email} </Text>
            </View>
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
    },
    line: {
        flexDirection: 'row',
        paddingTop   : 3,
        paddingBottom : 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
    },
    cell: {
        fontSize: 16,
        paddingLeft: 5,
        // borderWidth: 1,
    },
    label: {
        fontWeight: 'bold',
    }
})
