import { Text, TextInput } from 'react-native'
import { PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'
import { LoginScreenStyles } from '../assets/styles/IntialScreen'
import { useDispatch, useSelector } from 'react-redux'
import { setMobileNumber } from '../redux/action'
import { useState } from 'react'

function Login({ navigation }) {

    const { mobileNumber } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        navigation.navigate('Otp')
    }

    return (
        <Logo>
            <Text style={LoginScreenStyles.logIn}>Login</Text>
            <TextInput style={LoginScreenStyles.input}
                placeholder="Registered mobile Number"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                defaultValue={mobileNumber}
                keyboardType='numeric'
                onChangeText={(value) => dispatch(setMobileNumber(value))}
            />
            <TextInput style={LoginScreenStyles.input}
                placeholder="Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <Text style={LoginScreenStyles.forgotPassword}>Forgot Password?</Text>
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Request OTP'}
            />
        </Logo>
    )
}

export default Login