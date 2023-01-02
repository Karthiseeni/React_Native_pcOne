import React from 'react'
import { TextInput } from 'react-native'
import { BackBtn, PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'
import { LoginScreenStyles } from '../assets/styles/IntialScreen'

function PwdScreen({ navigation }) {

    const handleSubmit = () => {
        navigation.navigate('Otp')
    }

    return (
        <Logo>
            <BackBtn onPress={() => navigation.goBack()} />
            <TextInput style={LoginScreenStyles.input}
                placeholder="New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <TextInput style={LoginScreenStyles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Verify OTP & Create New Password'}
            />
        </Logo>
    )
}

export default PwdScreen