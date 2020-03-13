import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, FlatList
} from "react-native";
// import { connect } from 'react-redux';
import withUserdata from '../redux/hoc/withUserdata';

class Userlist extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>User List</Text>
                </View>
                <View style={styles.container}>
                    <Text>Userlist</Text>
                </View>
                <View>
                    <FlatList
                        // keyExtractor={(item) => item.key}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        data={value}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#709a2a' }}>
                                <Text style={{ marginRight: 15 }}>{item.email}</Text>
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
        flex: 1,
        marginHorizontal: '10%',
        marginTop: '2%',
    },
    header: {
        backgroundColor: '#709a2a',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        marginHorizontal: '5%',
        fontSize: 25,
        color: 'white',
    },
});