import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Alert
} from "react-native";
import Textinput from '../components/textinput';
import withUserdata from '../redux/hoc/withUserdata';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
        }
    }
    register(email, password) {
        if (this.state.email === '') {
            Alert.alert('Email is Required.')
        }
        else if (this.state.password === '') {
            Alert.alert('Password is Required.')
        }
        else if (this.state.confirmpassword === '') {
            Alert.alert('confirm password is Required.')
        }
        else if (this.state.password != this.state.confirmpassword) {
            Alert.alert('password and confirm password are not same.')
        }
        else {
            let obj = {
                email: email,
                password: password,
            }
            return this.props.userdataDetails(obj);
            // return this.props.navigation.navigate('Userlist');
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textcontainer}>
                    <Text style={styles.registertextstyle}>REGISTER</Text>
                    <Text style={styles.registerjointextstyle}>Register to join the bold focus platform.</Text>
                </View>
                <View>
                    <View style={styles.emailcontainerstyle}>
                        <Text style={styles.emailtextstyle}>Email Id</Text>
                        <Textinput
                            onChangeText={(text) => this.setState({
                                email: text
                            })}
                            placeHolder='Email id'></Textinput>
                    </View>
                    <View style={styles.emailcontainerstyle}>
                        <Text style={styles.emailtextstyle}>Password</Text>
                        <Textinput
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({
                                password: text
                            })}
                            placeHolder='Password'></Textinput>
                    </View>
                    <View style={styles.passwordcontainerstyle}>
                        <Text style={styles.emailtextstyle}>Confirm Password</Text>
                        <Textinput
                            onChangeText={(text) => this.setState({
                                confirmpassword: text
                            })}
                            secureTextEntry={true}
                            placeHolder='Confirm Password'></Textinput>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.btnstyle}
                            onPress={() => this.register(this.state.email, this.state.pasword)}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logintextviewstyle}>
                        <Text style={styles.logintextstyle}>You already with us? </Text>
                        <Text style={styles.getloginstyle}
                            onPress={() => this.props.navigation.navigate('Login')}>Get login</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default withUserdata(Register);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        marginTop: 50
    },
    textcontainer: {
        marginBottom: 30
    },
    registertextstyle: {
        fontWeight: 'bold',
        fontSize: 35
    },
    registerjointextstyle: {
        fontSize: 17,
        color: '#989898'
    },
    emailtextstyle: {
        color: '#58585a',
        marginBottom: 10
    },
    emailcontainerstyle: {
        marginBottom: 25
    },
    passwordcontainerstyle: {
        marginBottom: 40
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
    logintextstyle: {
        color: '#acaeb0',
        fontSize: 15
    },
    getloginstyle: {
        color: '#3d6916',
        fontSize: 15
    }

});