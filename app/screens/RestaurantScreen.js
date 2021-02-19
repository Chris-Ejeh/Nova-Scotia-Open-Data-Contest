import React, { useState } from 'react';

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import CountButton from '../components/CountButton';

function RestaurantScreen(props) {
	const [count, setCount] = useState(0);

	const handleCount = () => {
		return count;
	};

	const handleUpCount = () => {
		count >= 5 ? null : setCount(count + 1);
	};

	const handleDownCount = () => {
		count <= 0 ? null : setCount(count - 1);
	};

	const handleReset = () => {
		return setCount(0);
	};

	return (
		<Screen style={styles.container}>
			<View style={styles.resetContainer}>
				<TouchableOpacity style={styles.resetButton} onPress={handleReset}>
					<Text style={styles.resetText}>Reset</Text>
				</TouchableOpacity>
			</View>

			{/* /////////////////////// */}
			<View style={styles.countContainer}>
				<Text style={styles.countText}>{handleCount()}</Text>
			</View>

			{/* /////////////////////// */}
			<View style={styles.buttonContainer}>
				<CountButton title="+" onPress={handleUpCount} />
				<CountButton title="-" onPress={handleDownCount} />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.dark,
		flex: 1,
		justifyContent: 'center',
	},
	resetContainer: {
		marginVertical: 20,
		paddingHorizontal: 10,
	},
	resetButton: {
		backgroundColor: colors.purple,
		borderRadius: 30,
		height: 60,
		width: 120,
		justifyContent: 'center',
	},
	resetText: {
		fontSize: 20,
		fontWeight: '500',
		alignSelf: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 100,
	},
	countContainer: {
		marginVertical: 100,
		alignItems: 'center',
		padding: 10,
	},
	countText: {
		color: '#FF00FF',
		fontSize: 30,
	},
});
export default RestaurantScreen;
