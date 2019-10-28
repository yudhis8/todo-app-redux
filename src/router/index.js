import {
    Navigation,
} from 'react-native-navigation'

import Home from './../screens/main/home'

export function registerScreens(store: {}, Provider: {}){

    Navigation.registerComponent('Home', () => Home, Provider, store)

}
