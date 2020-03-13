import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput
} from "react-native";

class textInput extends Component {
    render() {
        const { placeHolder, secureTextEntry, onChangeText } = this.props;
        return (
            <View>
                <TextInput style={styles.textinputstyle}
                    onChangeText={onChangeText}
                    placeholder={placeHolder}
                    secureTextEntry={secureTextEntry}>
                </TextInput>
            </View>
        );
    }
}
export default textInput;

const styles = StyleSheet.create({
    textinputstyle: {
        height: 55,
        width: '100%',
        borderColor: '#d2d4d5',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15
    }
});