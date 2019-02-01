import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {

    const { people } = props;
    const textElements = people.map(person => {
        return (
            <PeopleListItem key={person.name.first} person={person} />
        );
    });

   return (
      <View style={style.container}>
        { textElements }
      </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#edeeef'
    }
})

export default PeopleList
