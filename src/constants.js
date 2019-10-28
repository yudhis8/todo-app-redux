import configJson from '../config';
import helper from './helper';

const generalConfig = configJson.general;
const modeConfig = configJson.development
export const config = Object.assign({}, generalConfig, modeConfig);

// Style
export const COLOR_PRIMARY = '#fff';
export const COLOR_PRIMARY_LIGHT = '#fd0000';
export const TEXT_COLOR_PRIMARY = '#000000';
export const TEXT_COLOR_PRIMARY_LIGHT = '#828282';
export const TEXT_COLOR_PRIMARY_LIGHTEST = '#E8E8E8';

// Default value

export const STATUSBAR_HEIGHT = helper.isAndroid ? 0 : 20;

// Image
export const images = {
  // logo: require('./assets/images/logo.png'),
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];