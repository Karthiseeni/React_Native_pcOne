import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { BackBtn, PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'
import OTPTextInput from 'react-native-otp-textinput'
import { OtpScreenStyles } from '../assets/styles/IntialScreen'
import { useSelector } from 'react-redux'

function Otp({ navigation }) {

    const { mobileNumber } = useSelector(state => {
        console.log(state.userReducer)
        return state.userReducer
    })


    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    const handleSubmit = () => {
        navigation.navigate('PwdScreen')
    }

    return (
        <Logo>
            <BackBtn onPress={() => navigation.goBack()} />
            <Text style={OtpScreenStyles.OtpTitle}>Enter the OTP received on {'\n'} +91 {mobileNumber}</Text>
            <View
                style={OtpScreenStyles.OtpContainer}
            >
                <OTPTextInput
                    inputCount={6}
                    textInputStyle={OtpScreenStyles.roundedTextInput}
                    tintColor={'#1C86EE'}
                />
            </View>
            <Text style={OtpScreenStyles.OtpDesc}>Resend OTP in {minutes < 10 ? `0${minutes}` : minutes}: {seconds < 10 ? `0${seconds}` : seconds}</Text>
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Verify OTP & Create New Password'}
            />
        </Logo>
    )
}

export default Otp