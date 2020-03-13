import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, FlatList, ScrollView
} from "react-native";
// import { connect } from 'react-redux';
import withUserdata from '../redux/hoc/withUserdata';

class UserDetails extends Component {
    render() {
        const { userdata } = this.props.navigation.state.params;
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>User Details</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.txtstyle}>UserDetails</Text>
                </View>
                <View style={styles.userprofilestyle}>
                    <Text style={styles.textstyle}>{"Email:" + userdata.email}</Text>
                    <Text style={styles.textstyle}>{"First Name:" + userdata.first_name}</Text>
                    <Text style={styles.textstyle}>{"Last Name:" + userdata.last_name}</Text>
                </View>
            </View>
        );
    }
}
export default withUserdata(UserDetails);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle: {
        fontSize: 25,
        color: '#709a2a'
    },
    txtstyle: {
        fontSize: 25,
        color: '#709a2a',
        fontWeight: 'bold'
    },
    userdatastyle: {
        flexDirection: 'row',
        borderWidth: 0.5,
        padding: 15,
        borderColor: 'white',
        marginHorizontal: 5,
        backgroundColor: '#709a2a',
        borderRadius: 5,
    },
    usertextstyle: {
        fontSize: 20,
        color: 'white'
    },
    header: {
        backgroundColor: '#709a2a',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        marginHorizontal: '5%',
        fontSize: 25,
        color: 'white',
    },
    userprofilestyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#709a2a',
        marginHorizontal: 5
    }
});