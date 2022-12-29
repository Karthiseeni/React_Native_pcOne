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
})

export function BackBtn(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => props.setScreenNav('login')} style={styles.container}>
                <Image source={require('../assets/images/back_arrow.png')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}