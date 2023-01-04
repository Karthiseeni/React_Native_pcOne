import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { BackBtn, PrimaryBtn } from '../common/Button'
import Logo from '../components/Logo'
import { LoginScreenStyles } from '../assets/styles/IntialScreen'
import { isLowerCaseLetter, isNumericLetter, isSpecialCharacter, isUpperCaseLetter } from '../common/utils'
// import PasswordChecklist from "react-password-checklist"

function PwdScreen({ navigation }) {

    const [isLower, setIsLower] = useState(false)
    const [isUpper, setIsUpper] = useState(false)
    const [pwdLength, setPwdLength] = useState(false)
    const [isNumeric, setIsNumeric] = useState(false)
    const [isSpecialChar, setIsSpecialChar] = useState(false)

    const handleSubmit = () => {
        navigation.navigate('PartSelection')
    }

    const PasswordStrengthCheck = (pass) => {
        setPwdLength(pass.length > 8)
        // setIsLower(/[a-z]/.test(pass))
        // setIsUpper(/[A-Z]/.test(pass))
        // setIsNumeric(/[0-9]/.test(pass))
        setIsLower(isLowerCaseLetter(pass))
        setIsUpper(isUpperCaseLetter(pass))
        setIsNumeric(isNumericLetter(pass))
        setIsSpecialChar(isSpecialCharacter(pass))
    }

    return (
        <Logo>
            <BackBtn onPress={() => navigation.goBack()} />
            <TextInput style={LoginScreenStyles.input}
                placeholder="New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                onChangeText={PasswordStrengthCheck}
            />
            <View style={{ marginLeft: 15 }}>
                <Text style={LoginScreenStyles.pwdHeading}> Password should contain the following</Text>
                <Text style={pwdLength ? LoginScreenStyles.pwdChecked : LoginScreenStyles.pwdList}><Text>{'\u2022'}{' '}</Text>At least eight characters</Text>
                <Text style={isUpper ? LoginScreenStyles.pwdChecked : LoginScreenStyles.pwdList}><Text>{'\u2022'}{' '}</Text>At least one capital letter (A-Z)</Text>
                <Text style={isNumeric ? LoginScreenStyles.pwdChecked : LoginScreenStyles.pwdList}><Text>{'\u2022'}{' '}</Text>At least one number (0-9)</Text>
                <Text style={isSpecialChar ? LoginScreenStyles.pwdChecked : LoginScreenStyles.pwdList}><Text>{'\u2022'}{' '}</Text>At least one special character</Text>
            </View>

            <TextInput style={LoginScreenStyles.input}
                placeholder="Confirm New Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />

            {/* <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital", "match"]}
                minLength={5}
                value={password}
                valueAgain={passwordAgain}
                onChange={(isValid) => { }}
            /> */}
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Verify OTP & Create New Password'}
            />
        </Logo>
    )
}

export default PwdScreen