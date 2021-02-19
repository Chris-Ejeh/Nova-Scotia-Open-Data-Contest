import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppButton from './app/components/AppButton';
import Screen from './app/components/Screen';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import LoginScreen from './app/screens/LoginScreen';
import AppFormField from './app/components/AppFormField';
import AppTextInput from './app/components/AppTextInput';
import RegisterScreen from './app/screens/RegisterScreen';
import RestaurantScreen from './app/screens/RestaurantScreen';
import CountButton from './app/components/CountButton';
import ActivitiyIndicator from './app/components/ActivitiyIndicator';

import AuthContext from './app/auth/context';

export default function App() {
	// const [user, setUser] = useState();

	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
