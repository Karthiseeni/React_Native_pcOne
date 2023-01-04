import React, { useState } from 'react'
import { PrimaryBtn } from '../common/Button';
import DropDown from '../common/DropDown';
import Logo from '../components/Logo';

function PartSelection({ navigation }) {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = [
        { label: 'Part 1', value: '1' },
        { label: 'Part 2', value: '2' },
        { label: 'Part 3', value: '3' },
        { label: 'Part 4', value: '4' },
        { label: 'Part 5', value: '5' },
        { label: 'Part 6', value: '6' },
        { label: 'Part 7', value: '7' },
        { label: 'Part 8', value: '8' },
    ];

    const handleSubmit = () => {
        navigation.navigate('LaunguageSelection')
    }

    return (
        <Logo>
            <DropDown
                title={'Select Part Number'}
                onChange={(val) => {
                    setValue(val)
                    setIsFocus(false);
                }}
                setIsFocus={setIsFocus}
                isFocus={isFocus}
                data={data}
                value={value}
            />
            <PrimaryBtn
                onPress={handleSubmit}
                name={'Submit'}
            />
        </Logo>
    )
}

export default PartSelection