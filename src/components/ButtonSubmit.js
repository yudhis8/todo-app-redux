/**
 * @format
 * @flow
 */

import React from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';
import helper from '../helper';
type Props = {
  title: string,
  onPress: Function,
  disabled: boolean,
  textStyle?: any,
  style?: any
};

export default (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.buttonArea, props.style]}>
    	<Text style={[styles.btnText, props.textStyle]}>
    	  {props.title}
    	</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	buttonArea: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		borderWidth: 1,
		borderColor: '#000',
		borderStyle: 'solid',
		paddingHorizontal: 20,
		backgroundColor: '#fff',
		elevation: 5
	},
	btnText: {
		color: '#000',
		fontSize: helper.fontSize(18),
		fontWeight: 'bold',
		fontFamily: 'Montserrat-Regular'
	}
});
