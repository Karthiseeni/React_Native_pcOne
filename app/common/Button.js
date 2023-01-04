import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
    },
    image: {
        width: 24,
        height: 24,
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
                <Image source={require('../assets/images/back_arrow.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export const PrimaryBtn = (props) => {
    return (
        <TouchableOpacity
            style={styles.primaryBtn}
            onPress={props.onPress}
        >
            <Text style={styles.primaryBtnText}>{props.name} </Text>
        </TouchableOpacity>
    )
}