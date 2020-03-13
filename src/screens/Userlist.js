import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, FlatList, ScrollView
} from "react-native";
// import { connect } from 'react-redux';
import withUserdata from '../redux/hoc/withUserdata';
class Userlist extends Component {

    componentDidMount() {
        const {
            value: { firstTime },
            userdataDetails,
        } = this.props;
        if (firstTime == false) {
            userdataDetails();
        }
    }


    finddata = (id) => {
        const {
            value: { users },
            navigation: { navigate },
        } = this.props;
        console.log("id", id);
        let resdata = users.filter(user => user.id === id)
        if (resdata) {
            console.log("resdata", resdata);
            this.props.navigation.navigate('UserDetails', {
                userdata: resdata[0]
            });
        }
        else {
            alert('not working')
        }
    }
    render() {
        // console.log('Value', this.props.value);
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>User List</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.txtstyle}>Userlist</Text>
                </View>
                <View>

                    <FlatList
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        data={this.props.value.users}
                        renderItem={({ item }) =>
                            <View style={styles.userdatastyle}>
                                <Text style={styles.usertextstyle}
                                    onPress={() => this.finddata(item.id)}
                                >{item.email}</Text>
                                <Text>{item.id}</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}
export default withUserdata(Userlist);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtstyle: {
        fontSize: 25,
        color: '#709a2a',
        fontWeight: 'bold'
    },
    userdatastyle: {
        flexDirection: 'row',
        borderWidth: 0.5,
        padding: 20,
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
});