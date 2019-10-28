/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TEXT_COLOR_PRIMARY } from '../constants';
import hepler from '../helper';

type Props = {
  style?: any,
  type?: 'bold' | 'light' | 'medium' | 'regular' | 'semiBold',
  children: any,
  color?: string
};

function CustomText(props: Props) {
  const customStyle = [
    {
      color: props.color ? props.color : TEXT_COLOR_PRIMARY
    }
  ];

  if (props.style) {
    customStyle.push(props.style);
  }

  if (props.type) {
    customStyle.push({
      fontFamily: `Montserrat-${hepler.upperCaseFirst(props.type)}`
    });
  }

  return (
    <Text {...props} style={customStyle}>
      {props.children}
    </Text>
  );
}

CustomText.defaultProps = {
  type: 'regular'
};

export default CustomText;
