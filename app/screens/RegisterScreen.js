import React from 'react';
import * as Yup from 'yup';

import { ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import ErrorMessage from '../components/ErrorMessage';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen(props) {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} barStyle="light-content" translucent={true} />
			<ImageBackground
				style={styles.container}
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
							keyboardType="email-address"
							name="email"
							placeholder="Email"
							textContentType="emailAddress"
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
		top: 200,
	},
	email: {
		marginBottom: 10,
	},
	password: {
		marginBottom: 10,
	},
	submit: {
		marginTop: 10,
		marginHorizontal: 20,
	},
});

export default RegisterScreen;
