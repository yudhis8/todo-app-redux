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
  onChangeText: Function,
  onFocus: Function,
  secureTextEntry: boolean,
  editable: boolean,
  press: boolean,
  multiline: boolean,
  keyboardType: string,
  value: string
};

export default function InputText(props: Props) {
  return (
    <TouchableOpacity disabled={props.press} onPress={props.onFocus} style={styles.inputArea}>
    	<Text style={styles.textTitle}>
    	  {props.title}
    	</Text>
    	<TextInput
    		style={styles.textInput}
    		onChangeText={props.onChangeText}
    		secureTextEntry={props.secureTextEntry}
    		editable={props.editable}
        onFocus={props.onFocus}
        value={props.value}
        multiline={props.multiline}
    		keyboardType={props.keyboardType}
    	/>
    </TouchableOpacity>
  );
};
InputText.defaultProps = {
  press: true
}
const styles = StyleSheet.create({
  inputArea: {
  	width: '95%',
  	minHeight: helper.heightPercentage('8%'),		
  	borderBottomWidth: 1,
  	borderBottomColor: '#000',
  	borderStyle: 'solid',
  	marginTop: 10,
  },
  textTitle: {
  	fontSize: helper.fontSize(16),
  	color: '#000',
    fontFamily: 'Montserrat-Regular'
  },
  textInput: {
  	width: '100%',
    color: '#000',
    fontFamily: 'Montserrat-Regular'
  }
});
