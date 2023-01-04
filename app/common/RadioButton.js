import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const styles = StyleSheet.create({
    radioLable: {
        margin: 0,
        padding: 0
    }
})

export default function RadioBtn(props) {
    return (
        <View>
            <RadioButton.Group onValueChange={value => props.setValue(value)} value={props.value}>
                {props.data.map((item, index) => (
                    <RadioButton.Item
                        key={index}
                        // position="leading"
                        label={item.label}
                        labelStyle={styles.radioLable}
                        value={item.value}
                    />
                ))}
            </RadioButton.Group>
        </View>
    );
}
