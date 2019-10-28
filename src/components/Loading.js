/**
 * @format
 * @flow
 */

import React from 'react';
import { ActivityIndicator, StyleSheet, Modal, View } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';

type Props = {
  isVisible: boolean
};

export default (props: Props) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {}}
      visible={props.isVisible}
    >
      <View style={style.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000004d'
  }
});
