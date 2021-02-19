import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ style, title, onPress }) {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.title}>{title} </Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.purple,
		borderRadius: 10,
		height: 60,
		justifyContent: 'center',
		width: '90%',
	},
	title: {
		alignSelf: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default AppButton;
