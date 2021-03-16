import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Example from './Example';
import Home from './Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Example" component={Example} />
    </Stack.Navigator>
);



export default Navigation;