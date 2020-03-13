import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from "react-native";
import Textinput from '../components/textinput';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    login(email, password) {
        if (this.state.email === '') {
            Alert.alert('Email is Required.')
        }
        else if (this.state.password === '') {
            Alert.alert('Password is Required.')
        }
        else {
            return this.props.navigation.navigate('Userlist');
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.logintextstyle}>LOG IN</Text>
                    <Text style={styles.loginjointextstyle}>Login to join the Bold focus platform.</Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.emailcontainerstyle}>
                        <Text style={styles.emailtextstyle}>Email Id</Text>
                        <Textinput
                            onChangeText={(text) => this.setState({
                                email: text
                            })}
                            placeHolder='Email Id'></Textinput>
                    </View>
                    <View style={styles.emailcontainerstyle}>
                        <Text style={styles.emailtextstyle}>Password</Text>
                        <Textinput
                            onChangeText={(text) => this.setState({
                                password: text
                            })}
                            secureTextEntry={true}
                            placeHolder='Password'></Textinput>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.btnstyle}
                            onPress={() => this.login()}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.logintextviewstyle}>
                        <Text style={styles.passwordtextstyle}>Forgotten Password? </Text>
                        <Text style={styles.getloginstyle}>Reset your Password</Text>
                    </View> */}
                </View>

            </View>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 70
    },
    logintextstyle: {
        fontWeight: 'bold',
        fontSize: 35
    },
    loginjointextstyle: {
        fontSize: 17,
        color: '#989898'
    },
    emailcontainerstyle: {
        marginBottom: 45
    },
    maincontainer: {
        marginTop: 50
    },
    emailtextstyle: {
        color: '#58585a',
        marginBottom: 10
    },
    btnstyle: {
        minWidth: 150,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#709a2a',
        display: 'flex',
        borderRadius: 45,
        shadowColor: '#c3de4b',
        shadowOpacity: 0.4,
        shadowRadius: 20,
        shadowOffset: { height: 10, width: 5 },
    },
    logintextviewstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row'
    },
    passwordtextstyle: {
        color: '#acaeb0',
        fontSize: 15
    },
    getloginstyle: {
        color: '#3d6916',
        fontSize: 15
    }

});