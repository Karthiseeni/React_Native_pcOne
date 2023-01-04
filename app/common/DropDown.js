import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { dropDownStyles, LoginScreenStyles } from '../assets/styles/IntialScreen';

function DropDown(props) {
    return (
        <View style={dropDownStyles.container}>
            {props.title && <Text style={LoginScreenStyles.logIn}>{props.title}</Text>}
            <Dropdown
                style={[dropDownStyles.dropdown, props.isFocus && { borderColor: 'blue' }]}
                placeholderStyle={dropDownStyles.placeholderStyle}
                selectedTextStyle={dropDownStyles.selectedTextStyle}
                inputSearchStyle={dropDownStyles.inputSearchStyle}
                iconStyle={dropDownStyles.iconStyle}
                data={props.data}
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!props.isFocus ? 'Select Part Number' : '...'}
                searchPlaceholder="Search..."
                value={props.value}
                onFocus={() => props.setIsFocus(true)}
                onBlur={() => props.setIsFocus(false)}
                onChange={props.onChange}
            />
        </View>
    )
}

export default DropDown