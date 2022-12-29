import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 0,
    },
    logoTitle: {
        color:'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 8,
    },
    logInContainer: {
        margin: 15,
        padding: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 10
    },
})

function Logo({ children }) {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.image} />
                <Text style={styles.logoTitle}>Election Commission of India</Text>
            </View>
            <View style={styles.logInContainer}>
                {children}
            </View>
        </View>
    )
}

export default Logo