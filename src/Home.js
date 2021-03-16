import React, { useEffect, useContext, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

const Home = (props, { navigation }) => {

    useEffect(() => {

    })


    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hola</Text>
            <Button
                title="Go"
                onPress={() => { props.navigation.navigate('Example') }}
            ></Button>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({


});