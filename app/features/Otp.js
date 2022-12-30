import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BackBtn, PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'
import OTPTextInput from 'react-native-otp-textinput'

const styles = StyleSheet.create({
    OtpTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    OtpContainer: {
        padding: 0,
        margin: 0,
        width: '80%',
        marginLeft: "9%"
    },
    roundedTextInput: {
        borderColor: 'red',
        borderRadius: 5,
        borderWidth: 3,
        padding: 5,
        margin: 0,
        width: '13%',
        height: '100%'
    },
    OtpDesc: {
        fontSize: 14,
        textAlign: 'center',
        margin: 20
    },
})

function Otp(props) {
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

    return (
        <Logo>
            <BackBtn preScreen='login' setScreenNav={props.setScreenNav} />
            <Text style={styles.OtpTitle}>Enter the OTP received on {'\n'}  your mobile</Text>
            <View
                style={styles.OtpContainer}
            >
                <OTPTextInput
                    inputCount={6}
                    textInputStyle={styles.roundedTextInput}
                    tintColor={'#1C86EE'}
                />
            </View>
            <Text style={styles.OtpDesc}>Resend OTP in {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}</Text>
            <PrimaryBtn
                nxtScreen='pwdScreen'
                setScreenNav={props.setScreenNav}
                name={'Verify OTP & Create New Password'}
            />
        </Logo>
    )
}

export default Otp