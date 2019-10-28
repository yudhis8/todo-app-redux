/**
 * @format
 * @flow
 */

import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';
import helper from '../helper';
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
  image: any,
  black?: boolean,
  title?: string,
  icon?: any,
  onPressLeft?: Function,
  onPressRight?: Function,
};

export default (props: Props) => {
  return (
    <View style={props.black ? styles.headerAreaBlack : styles.headerArea}>
    	<View style={styles.left}>
    		{
    			props.black &&
    			<TouchableOpacity
    			  onPress={props.onPressLeft}>
    			  	<Ionicons name='md-arrow-round-back' color='#fc9700' size={50} />
    			</TouchableOpacity>
    		}
    	</View>
    	<View style={styles.body}>
    		{
    			props.black ?
    			<Text style={styles.white}>
    			  {props.title}
    			</Text>
    			:
    			<Image
	    		  style={{width: '100%', height: 70}}
	    		  source={props.image}
	    		  resizeMode='stretch'
	    		/>
    		}
    		
    	</View>
    	<View style={styles.right}>
    		{
    			props.black &&
    			<TouchableOpacity
	    		  onPress={props.onPressRight}>
	    		  {props.icon}
	    		</TouchableOpacity>
    		}
    	</View>
    </View>
  );
};

const styles = StyleSheet.create({
	headerArea: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 20,
		height: 70
	},
	headerAreaBlack: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 20,
		height: 70,
		backgroundColor: '#000',
	},
	left: {
		width: '15%',
		alignItems: 'flex-start',
	},
	body: {
		width: '70%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	right: {
		width: '15%',
		alignItems: 'flex-end',
	},
	white: {
		fontSize: helper.fontSize(25),
		color: '#fff'
	}
});
