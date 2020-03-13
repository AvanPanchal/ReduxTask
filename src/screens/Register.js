import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, AsyncStorage
} from "react-native";
import Textinput from '../components/textinput';
import { connect } from 'react-redux';
import userdataAction from '../redux/actions/userdataAction';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
        }
    }
    register = async (email, password) => {
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
            let user = {
                email: this.state.email.trim().toLowerCase(),
                password: this.state.password,
            }
            let res = await fetch('https://reqres.in/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else console.error('Error : ', response);
                })
                .then(json => {
                    console.log(json);
                    return json;
                })
                .catch(error => console.error('error', error));


            console.log("res :  from api : ", res);

            if (!res.token) {
                alert("Not Work")
            }
            else {
                //alert("Work")
                let resdata = AsyncStorage.setItem('userdataAction', JSON.stringify(res))
                return this.props.navigation.navigate('Userlist');
            }
        }

    }
    render() {
        return (
            <KeyboardAvoidingView>
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
            </KeyboardAvoidingView>
        );
    }
}
export default connect(null, { userdataAction })(Register);

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