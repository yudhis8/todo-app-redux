/**
 * @format
 * @flow
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import Text from './Text';
import {
  COLOR_PRIMARY,
  TEXT_COLOR_PRIMARY_LIGHT,
  TEXT_COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT
} from '../constants';
import helper from '../helper';

type TabItem = { id: number, text: string };
type Props = {
  items: Array<TabItem>,
  activeTabId: number,
  onItemPress: any,
  labelKey: string
};

function Tab(props: Props) {
  const activeItem = props.items.find(t => t.id == props.activeTabId) || {
    id: 0,
    name: ''
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={style.tabSwitcher}
    >
      {props.items.length > 0 &&
        props.items.map(item => (
          <TouchableOpacity
            key={`tab-item-${item.id}`}
            style={[
              style.tabItem,
              item.id == props.activeTabId && style.tabItemActive
            ]}
            onPress={props.onItemPress.bind(this, item.id)}
          >
            <Text
              style={[
                style.tabTitle,
                item.id == props.activeTabId && style.tabTitleActive
              ]}
              type={item.id == props.activeTabId ? 'bold' : 'regular'}
            >
              {item[props.labelKey]}
            </Text>
          </TouchableOpacity>
        ))}

      {props.items.length == 0 && <ActivityIndicator color="white" />}
    </ScrollView>
  );
}

Tab.defaultProps = {
  labelKey: 'text'
};

const style = StyleSheet.create({
  tabSwitcher: {
    flexDirection: 'row',
    // borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  tabItem: {
    paddingVertical: helper.widthPercentage('3%'),
    marginRight: helper.widthPercentage('3%')
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  tabTitle: {
    fontSize: helper.fontSize(12),
    color: TEXT_COLOR_PRIMARY_LIGHT
  },
  tabTitleActive: {
    fontSize: helper.fontSize(16),
    color: TEXT_COLOR_PRIMARY
  }
});

export default Tab;
