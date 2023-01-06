import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
    logIn: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15
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
    pwdHeading: {
        fontWeight: 'bold',
    },
    pwdList: {
        marginTop: 10,
        marginLeft: 20
    },
    pwdButtlet: {
        marginRight: 550
    },
    pwdChecked: {
        color: 'green',
        marginTop: 10,
        marginLeft: 20
    }
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

export const dropDownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});