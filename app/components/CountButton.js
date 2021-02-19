import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function CountButton({ title, onPress, style }) {
	return (
		<View style={[styles.container, style]}>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	button: {
		backgroundColor: colors.purple,
		borderRadius: 60,
		height: 120,
		width: 120,
		//justifyContent: 'center',
	},
	text: {
		fontSize: 90,
		alignSelf: 'center',
	},
});
export default CountButton;
