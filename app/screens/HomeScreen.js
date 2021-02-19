import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	StatusBar,
	View,
	Text,
} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const Separator = () => <View style={styles.separator} />;

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<StatusBar hidden={false} barStyle="light-content" translucent={true} />
			<ImageBackground
				style={styles.container}
				source={require('../assets/images/steak.jpeg')}
				blurRadius={20}
			>
				<View style={styles.titlecontainer}>
					<Text style={styles.title}>Welcome to Team CEI</Text>
				</View>
				<View style={styles.button}>
					<AppButton
						style={styles.login}
						title="Guest"
						onPress={() => navigation.navigate('Login')}
					/>
					<Separator />
					<AppButton
						style={styles.login}
						title="Restaurant"
						onPress={() => navigation.navigate('Restaurant Login')}
					/>
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
	titlecontainer: {
		top: 200,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 60,
		color: colors.white,
		textAlign: 'center',
	},
	button: {
		top: 450,
	},
	login: {
		marginHorizontal: 20,
		marginBottom: 15,
	},
	register: {
		marginHorizontal: 20,
		marginBottom: 15,
	},
	separator: {
		marginBottom: 15,
		borderBottomColor: '#737373',
		borderBottomWidth: 2,
		width: '80%',
		alignSelf: 'center',
	},
});

export default HomeScreen;
