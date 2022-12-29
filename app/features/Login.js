import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Logo from '../components/Logo'

const styles = StyleSheet.create({
    logIn: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        margin: 15,
        width: 310,
        height: 50,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
    },
    submitButton: {
        backgroundColor: '#1C86EE',
        width: 310,
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 5,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    forgotPassword: {
        width: '100%',
        textAlign: 'right'
    },
})

function Login(props) {
    return (
        <Logo>
            <Text style={styles.logIn}>Login</Text>
            <TextInput style={styles.input}
                placeholder="Registered mobile Number"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="#808080"
                autoCapitalize="none"
            />
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => props.setScreenNav('otp')}
            >
                <Text style={styles.submitButtonText}> Request OTP </Text>
            </TouchableOpacity>
        </Logo>
    )
}

export default Login