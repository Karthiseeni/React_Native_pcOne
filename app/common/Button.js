import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 22,
        height: 22,
    },
    title: {
        color: 'black',
        fontSize: 16,
        marginLeft: 2,
        fontWeight: '500'
    },
    primaryBtn: {
        backgroundColor: '#1C86EE',
        width: 310,
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 5,
    },
    primaryBtnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
})

export function BackBtn(props) {
    return (
        <View {...props}>
            <TouchableOpacity onPress={props.onPress} style={styles.container}>
                <Image source={require('../assets/images/back_arrow.png')} style={styles.image} /><Text style={styles.title}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export const PrimaryBtn = (props) => {
    return (
        <TouchableOpacity style={styles.primaryBtn} {...props}>
            <Text style={styles.primaryBtnText}>{props.name} </Text>
        </TouchableOpacity>
    )
}