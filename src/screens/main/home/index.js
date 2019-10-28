/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';

import style from './style';
import { Props, State } from './type';
import { Header, ButtonHome } from '../../../components';
import {pushScreen} from './../../Navigate'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { image } from '../../../constants';
import helper from '../../../helper';
import {Navigation} from 'react-native-navigation'
class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true
    };
    console.log(props)
  }

  componentDidMount(){
    console.log('oke')
  }

  render() {

    return (
      <SafeAreaView style={style.container}>
        <Header
          black={true}
          title={'Todo App'}
          onPressLeft={()=> Navigation.pop(this.props.componentId)}
        />
        <ScrollView>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
