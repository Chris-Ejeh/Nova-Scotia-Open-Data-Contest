import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import colors from '../config/colors';
import { Button } from 'react-native';
import RestaurantLoginScreen from '../screens/RestaurantLoginScreen';

const MainStack = createStackNavigator();
//const RootStack = createStackNavigator();

function AuthNavigator(props) {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Back"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<MainStack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerTransparent: true,
					headerTintColor: colors.white,
				}}
			/>
			<MainStack.Screen
				name="Restaurant Login"
				component={RestaurantLoginScreen}
				options={{
					headerTransparent: true,
					headerTintColor: colors.white,
				}}
			/>
			<MainStack.Screen
				name="Register"
				component={RegisterScreen}
				options={{
					headerTransparent: true,
					headerTintColor: colors.white,
				}}
			/>
		</MainStack.Navigator>
	);
}

export default AuthNavigator;
