import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const PeopleListItem = props => {

    const {first, last} = props.person.name;

    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>
                {`${first} ${last}`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height            : 60,
        borderBottomWidth : 1,
        borderBottomColor : '#bbb',
        alignItems        : 'center',
        flexDirection     : 'row'
    },
    lineText: {
        fontSize   : 20,
        paddingLeft: 15,
    }
})

export default PeopleListItem;