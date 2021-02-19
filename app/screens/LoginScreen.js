import React from 'react';
import * as Yup from 'yup';

import { ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} barStyle="light-content" translucent={true} />
			<ImageBackground
				style={styles.image}
				source={require('../assets/images/steak.jpeg')}
				blurRadius={30}
			>
				<View style={styles.input}>
					{/* <ErrorMessage error="Invalid email/password" visible={loginFailed} /> */}
					<AppForm
						initialValues={{ name: '', password: '' }}
						onSubmit={(values) => console.log(values)}
						validationSchema={validationSchema}
					>
						<AppFormField
							autoCorrect={false}
							icon="account"
							name="name"
							placeholder="Name"
						/>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							name="password"
							keyboardType="visible-password"
							placeholder="Password"
							secureTextEntry
							textContentType="emailAddress"
						/>
						<AppFormField
							autoCorrect={false}
							icon="account"
							name="name"
							keyboardType="numeric"
							placeholder="Restaurant Capacity"
						/>
						<SubmitButton title="Login" style={styles.submit} />
					</AppForm>
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

export default LoginScreen;
