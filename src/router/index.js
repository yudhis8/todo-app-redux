import {
    Navigation,
} from 'react-native-navigation'

import Home from './../screens/main/home'

export function registerScreens(store: {}, Provider: {}){
    // console.log(store, Provider)
    Navigation.registerComponentWithRedux('Home', () => Home, Provider, store)

}
