import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { Text, View } from 'react-native'
import Logo from '../components/Logo'

function DeviceCapable() {
    return (
        <View>
            <Text>DeviceCapable</Text>
            <FontAwesomeIcon icon={faCamera} />
        </View>
    )
}

export default DeviceCapable