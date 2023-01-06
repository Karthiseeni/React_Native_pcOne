import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { LoginScreenStyles } from '../assets/styles/IntialScreen'
import { BackBtn, PrimaryBtn } from '../common/Button'
import DropDown from '../common/DropDown'
import RadioBtn from '../common/RadioButton'
import Logo from '../components/Logo'

function LaunguageSelection({ navigation }) {

    const [checked, setChecked] = useState('1');
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null)

    const data = [
        { value: '1', label: 'Auto detected on your Assembly Constinuency' },
        { value: '2', label: 'Manually' },
    ];

    const dropDownData = [
        { label: 'English', value: '1' },
        { label: 'Hindi', value: '2' },
        { label: 'Telugu', value: '3' },
        { label: 'Malayalam', value: '4' },
        { label: 'Kanada', value: '5' },
    ];

    const handleSubmit = () => {
        navigation.navigate('DeviceCapable')
    }

    return (
        <Logo>
            <BackBtn style={{ marginBottom: 15 }} onPress={() => navigation.goBack()} />
            <Text style={LoginScreenStyles.logIn}>Select Language</Text>
            <View style={{ marginTop: 15 }}>
                <RadioBtn
                    data={data}
                    setValue={setChecked}
                    value={checked}
                />
            </View>
            <DropDown
                onChange={(val) => {
                    setValue(val)
                    setIsFocus(false);
                }}
                setIsFocus={setIsFocus}
                isFocus={isFocus}
                data={dropDownData}
                value={value}
            />
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Submit'}
            />
        </Logo>
    )
}

export default LaunguageSelection