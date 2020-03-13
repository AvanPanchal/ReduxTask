import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert, AsyncStorage
} from "react-native";
import Textinput from '../components/textinput';
import { connect } from 'react-redux';
import userdataAction from '../redux/actions/userdataAction';
import withUserdata from '../redux/hoc/withUserdata';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    login = async (email, password) => {
        if (this.state.email === '') {
            Alert.alert('Email is Required.')
        }
        else if (this.state.password === '') {
            Alert.alert('Password is Required.')
        }
        else {
            let user = {
                email: this.state.email.trim().toLowerCase(),
                password: this.state.password,
            }
            let res = await fetch('https://reqres.in/api/login', {
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
                let resdata = AsyncStorage.setItem(userdataAction, JSON.stringify(res))
                return this.props.navigation.navigate('Userlist');
            }
        }
    }
    render() {
        //console.log('Values ', this.props.value);
        return (
            <KeyboardAvoidingView>
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
                                onPress={() => this.login(this.state.email, this.state.password)}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={styles.logintextviewstyle}>
                        <Text style={styles.passwordtextstyle}>Forgotten Password? </Text>
                        <Text style={styles.getloginstyle}>Reset your Password</Text>
                    </View> */}
                        <TouchableOpacity
                            style={styles.btnstyle}
                            onPress={() => this.props.navigation.navigate('Userlist')}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Userlist</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default connect(null, { userdataAction })(Login);

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
        marginTop: 20
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