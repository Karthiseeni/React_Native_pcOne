import React from 'react'
import { Text, View } from 'react-native'
import { BackBtn } from '../common/Button'
import Logo from '../components/Logo'

function Otp(props) {
    return (
        <Logo>
            <BackBtn setScreenNav={props.setScreenNav} />
            <Text>OTP Screen</Text>
        </Logo>
    )
}

export default Otp