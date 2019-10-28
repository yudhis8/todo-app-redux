/**
 * @format
 * @flow
 */

import React from 'react';
import { Platform, Text, StyleSheet, StatusBar, View } from 'react-native';

import { COLOR_PRIMARY } from '../constants';
import helper from '../helper';

type Props = {};

export default (props: Props) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    ...Platform.select({
      ios: {
        backgroundColor: COLOR_PRIMARY,
        height: helper.isIphoneX ? 44 : 20
      }
    })
  }
});
