import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { BackBtn, PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'

const styles = StyleSheet.create({
    input: {
        margin: 15,
        width: 310,
        height: 50,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
    },
})

function PwdScreen(props) {
    return (
        <Logo>
            <BackBtn
                preScreen='otp'
                setScreenNav={props.setScreenNav} />
            <TextInput style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"    
            />
            <TextInput style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <PrimaryBtn
                nxtScreen='otp'
                setScreenNav={props.setScreenNav}
                name={'Confirm Password'}
            />
        </Logo>
    )
}

export default PwdScreen