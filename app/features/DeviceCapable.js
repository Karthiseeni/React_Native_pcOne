import React from 'react'
import { Text, View } from 'react-native'
import Logo from '../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { AppBg } from '../assets/styles/IntialScreen'
import { PrimaryBtn } from '../common/Button'

function DeviceCapable({ navigation }) {
    console.log(navigation)
    const handleSubmit = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }
    return (
        <View style={AppBg.container}>
            <Text >Device Capatibility Report</Text>
            <FontAwesomeIcon icon={faCamera} />
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Submit'}
            />
        </View>
    )
}

export default DeviceCapable