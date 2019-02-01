import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../utils'

const PeopleListItem = props => {
    const {person, navigateToDetail} = props;
    const {title, first, last} = person.name;
    return (
        <TouchableOpacity onPress={() => navigateToDetail()}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: props.person.picture.thumbnail}} />
                <Text style={styles.lineText}>
                    {`${
                        capitalizeFirstLetter(title)
                    } ${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)
                    }`}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

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
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;