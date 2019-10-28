import { StyleSheet } from 'react-native';

import { COLOR_PRIMARY } from '../../../constants';
import helper from '../../../helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: COLOR_PRIMARY
  },
  wrap: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  sortArea: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '95%'
  },
  floatingButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: 'orange',
  },
  todoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: '95%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  left: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  leftChange: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  body: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },
  right: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
