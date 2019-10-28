/**
 * @format
 * @flow
 */

import { Platform, Dimensions, PixelRatio } from 'react-native';
import moment from 'moment';
import { months, days } from './constants';

const { width, height } = Dimensions.get('window');

// NOTE: a helper class to consistently scale margins,paddings
//       on different screen size
class Helper {
  static scaleUnit(
    pixelRatio: number,
    dimensions: 'width' | 'height',
    offset: number
  ): ?number {
    switch (dimensions) {
      case 'width':
        if (pixelRatio === null) {
          return Math.round(width * (offset / width));
        }
        if (pixelRatio <= 1.5) {
          return Math.round(width * ((offset * 0.85) / width));
        }
        if (pixelRatio <= 2) {
          return Math.round(width * (offset / width));
        }

        if (pixelRatio <= 3) {
          return Math.round(width * (offset / width));
        }
        if (pixelRatio <= 4) {
          return Math.round(width * (offset / width));
        }

        break;

      case 'height':
        if (pixelRatio === null) {
          return Math.round(height * (offset / height));
        }
        if (pixelRatio <= 1.5) {
          return Math.round(height * ((offset * 0.85) / height));
        }
        if (pixelRatio <= 2) {
          return Math.round(height * (offset / height));
        }

        if (pixelRatio <= 3) {
          return Math.round(height * (offset / height));
        }

        if (pixelRatio <= 4) {
          return Math.round(width * (offset / width));
        }
        break;

      default:
        return null;
    }
  }

  static get isDev(): boolean {
    return __DEV__ ? true : false;
  }

  static emailValidator(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static reduceText(text: string): string {
    // this is a function to change tenant's name view if their name is > 25 char
    if (text.length >= 70) {
      const newName = `${text.slice(0, 95)}...`;
      return newName;
    }
    return text;
  }

  static widthPercentage = (widthPercent: string): number => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
  };

  static heightPercentage = (heightPercent: string): number => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
  };

  static fontSize = (size: number): number => {
    // Precalculate Device Dimensions for better performance
    const x = Dimensions.get('window').width;

    // Calculating ratio from iPhone breakpoints
    let ratioX = x < 375 ? (x < 320 ? 0.55 : 0.8) : 1;

    // TODO: Need research
    // Extend ratio for android
    if (Helper.isAndroid) {
      if (x >= 360) {
        ratioX = 1;
      }
      if (x >= 420) {
        ratioX = 1.25;
      }
    }

    // We're simulating EM by changing font size according to Ratio
    const unit = size * ratioX;

    return unit;
  };

  static upperCaseFirst = (text: string) => {
    return text.replace(/^\w/, c => c.toUpperCase());
  };

  static get isAndroid() {
    return Platform.OS === 'android';
  }

  static get isIOS() {
    return Platform.OS === 'ios';
  }

  static getCurrentPosition(options: PositionOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  static get isIphoneX() {
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (height === 812 || width === 812 || (height === 896 || width === 896))
    );
  }

  static formattedTime(date: Date | null) {
    if (date) {
      const hourString =
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const minuteString =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      return `${hourString}:${minuteString}`;
    } else {
      return '00:00';
    }
  }

  static numberWithSeparator(x: string | number, separator: ',' | '.' = '.') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  static formattedDate(
    date: Date | null,
    withDay?: boolean,
    withTime?: boolean
  ): string {
    if (date) {
      let stringDate = '';

      if (withDay) {
        stringDate = days[date.getDay()] + ', ';
      }

      stringDate += `${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;

      if (withTime) {
        const hourString =
          date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        const minuteString =
          date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        stringDate += ` ${hourString}:${minuteString}`;
      }

      return stringDate;
    } else {
      return '';
    }
  }

  static roundNumberToThousand(input: number): number {
    const balance = input % 1000;

    if (balance == 0) return input;

    const plus = 1000 - balance;
    return input + plus;
  }
  static rad(x: number): number {
    return (x * Math.PI) / 180;
  }
  static debounce(func: Function, wait: number, immediate?: boolean) {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      if (timeout != null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  static getDistance(
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = Helper.rad(lat2 - lat1);
    var dLong = Helper.rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(Helper.rad(lat1)) *
        Math.cos(Helper.rad(lat2)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  static getActiveRouteName(navigationState: Object) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return Helper.getActiveRouteName(route);
    }
    return route.routeName;
  }
}

export default Helper;
