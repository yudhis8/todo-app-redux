/**
 * @format
 * @flow
 */

import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';
import helper from '../helper';
type item = {
  label: string,
  value: string
};

type Props = {
  title: string,
  value: string,
  style: any,
  onValueChange: Function,
  data: Array<item>
};

function InputPicker(props: Props) {
  return (
    <View style={[styles.inputArea, props.style]}>
    	<Text style={styles.textTitle}>
    	  {props.title}
    	</Text>
    	<Picker
        selectedValue={props.value}
        style={{ width: '100%',}}
        onValueChange={(itemValue, itemIndex) =>
          props.onValueChange(itemValue, itemIndex)
        }>
        {
          props.data.map((data)=>{
            return <Picker.Item label={data.label} value={data.value} />
          })
        }
      </Picker>
    </View>
  );
};

InputPicker.defaultProps = {
  data: [
    {label: 'Pilih Customer', value: ''}
  ],
  value: 'Pilih Customer'
}

const styles = StyleSheet.create({
  inputArea: {
  	width: '95%',
  	height: helper.heightPercentage('10%'),		
  	borderBottomWidth: 1,
  	borderBottomColor: '#000',
  	borderStyle: 'solid',
  	marginTop: 10,
  },
  textTitle: {
  	fontSize: helper.fontSize(16),
  	color: '#000'
  },
  textInput: {
  	width: '100%',

  }
});

export default InputPicker;
