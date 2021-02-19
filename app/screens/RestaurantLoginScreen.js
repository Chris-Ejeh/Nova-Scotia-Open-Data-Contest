import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import authApi from '../api/auth';
import jwtDecode from 'jwt-decode';

import {
	ImageBackground,
	StyleSheet,
	StatusBar,
	View,
	Button,
} from 'react-native';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
	name: Yup.string().label('Username'),
	password: Yup.string().required().min(1).label('Password'),
});

function RestaurantLoginScreen(props) {
	const navigation = useNavigation();
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		const user = jwtDecode(result.data);
		console.log(user);
	};

	return (
		<View style={styles.container}>
			<StatusBar hidden={false} barStyle="light-content" translucent={true} />
			<ImageBackground
				style={styles.image}
				source={require('../assets/images/steak.jpeg')}
				blurRadius={30}
			>
				<View style={styles.input}>
					<ErrorMessage
						error="Invalid email and/or password"
						visible={loginFailed}
					/>
					<AppForm
						initialValues={{ email: '', password: '' }}
						onSubmit={handleSubmit}
						validationSchema={validationSchema}
					>
						<AppFormField autoCorrect={false} name="name" placeholder="Name" />
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							placeholder="Password"
							secureTextEntry
							textContentType="password"
						/>
						<SubmitButton title="Login" style={styles.submit} />
					</AppForm>

					<View style={styles.button}>
						<Button
							title="sign up"
							color={colors.white}
							onPress={() => navigation.navigate('Register')}
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	button: {
		top: 20,
	},
	input: {
		paddingHorizontal: 20,
		top: 250,
	},
	email: {
		marginBottom: 10,
	},
	password: {
		marginBottom: 10,
	},
	submit: {
		marginHorizontal: 20,
		marginTop: 10,
	},
});

export default RestaurantLoginScreen;
