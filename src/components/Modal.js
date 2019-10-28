/**
 * @format
 * @flow
 */

import React from 'react';
import { ActivityIndicator, StyleSheet, Modal, View, TouchableWithoutFeedback } from 'react-native';
import { COLOR_PRIMARY_LIGHT, TEXT_COLOR_PRIMARY_LIGHTEST } from '../constants';
import ButtonSubmit from './ButtonSubmit'
type FilterItem = { id: string, label: string };

type Props = {
  isVisible: boolean,
  onClose: Function,
  children: any
};

export default (props: Props) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={props.onClose}
      visible={props.isVisible}
    >
      <TouchableWithoutFeedback
        onPress={props.onClose}>
        <View style={style.container}>
          <TouchableWithoutFeedback>
            <View style={style.modalArea}>
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000004d',
    zIndex: 1,
  },
  modalArea: {
    width: '70%',
    backgroundColor: '#fff',
    zIndex: 99,
    alignItems: 'center'
  },
  buttonArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginVertical: 10,
  }
});
