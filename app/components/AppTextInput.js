import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppTextInput({ style, value, ...otherProps }) {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				style={[styles.text, style]}
				placeholderTextColor={colors.grey}
				editable
				returnKeyType="done"
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { marginVertical: 10 },
	text: {
		borderColor: colors.grey,
		borderRadius: 15,
		backgroundColor: colors.lightgrey,
		height: 60,
		width: 370,
		fontSize: 18,
		paddingHorizontal: 10,
	},
});
export default AppTextInput;
