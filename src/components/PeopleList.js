import React from 'react'
import { FlatList, ScrollView, StyleSheet } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {

    const { people, onPressItem } = props;

    return (
       <FlatList
            style={styles.container}
            data={people}
            renderItem={({ item }) => (
                <PeopleListItem
                    key={item.name.first}
                    person={item}
                    navigateToDetail={onPressItem}
                />)}
            keyExtractor={item => item.name.first}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edeeef'
    }
})

export default PeopleList
