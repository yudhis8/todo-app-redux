/**
 * @format
 * @flow
 */

import React from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';
import helper from '../helper';
type Props = {
  title: string,
  onPress: Function,
  icon: any
};

export default (props: Props) => {
  return (
    <View style={styles.mainArea}>
    	<TouchableOpacity onPress={props.onPress} style={styles.buttonArea}>
	    	{props.icon}
	    </TouchableOpacity>
	    <Text style={styles.text}>
	      	{props.title}
	    </Text>
    </View>	
  );
};

const styles = StyleSheet.create({
	mainArea: {
		width: helper.widthPercentage('50%'),
		height: helper.heightPercentage('20%'),
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonArea: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		height: 70,
		width: 70,
		backgroundColor: '#fc9700',
		marginBottom: 10,
	},
	text: {
		color: '#000',
		fontSize: helper.fontSize(18),
		fontWeight: 'bold',
		fontFamily: 'Montserrat-Regular'
	}
});
