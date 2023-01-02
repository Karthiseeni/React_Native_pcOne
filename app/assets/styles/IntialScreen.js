import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
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
    forgotPassword: {
        width: '100%',
        textAlign: 'right'
    },
})

export const OtpScreenStyles = StyleSheet.create({
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