import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                <Text style={styles.itemText} >{props.text.toUpperCase()}</Text>
            </View>
            <View style={styles.circular}/>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#2e2e2eff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 12,
        height: 12,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#FFF',
        opacity: 0.2,
        marginRight: 15,
    },
    itemText: {
        color: '#fff',
        maxWidth: '87%',
        fontWeight: "600",
    },
    circular: {

        width: 12,
        height: 12,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#FFF',
        opacity: 0.2,
    },
})

export default Task;