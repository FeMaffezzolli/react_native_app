import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default Line = ({ label="", content="-" }) => {
    return (
        <View style={styles.line}>
            <Text
                style={[
                    styles.cell,
                    styles.label,
                    label.length > 8 ? styles.longLabel : null
                    ]}>
                { label }
            </Text>
            <Text style={styles.cell}> { content } </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop   : 3,
        paddingBottom: 3,
        borderWidth  : 1,
        borderColor  : "#c5c5c5"
    },
    cell: {
        fontSize   : 18,
        paddingLeft: 5 ,
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 3
    },
    longLabel: {
        fontSize: 12,
    }
});
