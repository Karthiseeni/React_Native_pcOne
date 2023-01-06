import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const styles = StyleSheet.create({
    radioLable: {
        margin: 0,
        padding: 0
    },
    languageSelected: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 15,
        color: 'black',
    }
})

export default function RadioBtn(props) {
    return (
        <View>
            <RadioButton.Group onValueChange={value => props.setValue(value)} value={props.value}>
                {props.data.map((item, index) => (
                    <View key={index}>
                        <RadioButton.Item
                            color="#1C86EE"
                            // position="leading"
                            label={item.label}
                            labelStyle={styles.radioLable}
                            value={item.value}
                        />
                        {item.value == '1' && <Text style={styles.languageSelected}>Tamil</Text>}
                    </View>
                ))}
            </RadioButton.Group>
        </View>
    );
}
