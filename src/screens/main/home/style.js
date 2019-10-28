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
  versioning: {
    marginVertical: 10,
  }
});
