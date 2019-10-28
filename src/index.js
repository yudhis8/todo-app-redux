import {Platform, Text, UIManager} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './router/index';
import Provider from './provider/provider'
import Stores from './store'
registerScreens(Stores, Provider);
console.log('asd', Provider)
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#fff',
      visible: true,
      style: 'dark',
    },
    layout: {
      backgroundColor: '#fff',
      orientation: ['portrait']
    },
    animations: {
      setRoot: {
        enabled: 'true',
        x: {
          from: 2000,
          to: 0,
          duration: 500,
        }
      },
      push: {
      waitForRender: true,
      enabled: 'true',
      topBar: {
        x: {
          from: 2000,
          to: 0,
          duration: 500,
        }
      },
      content: {
        x: {
          from: 2000,
          to: 0,
          duration: 300
        }
      }
    },
    pop:{
      enabled: 'true',
      topBar: {
        x: {
          from: 2000,
          to: 0,
          duration: 500,
        }
      },
      content: {
        x: {
          from: 0,
          to: 2000,
          duration: 500
        }
      }
    }
    }
  });
})
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
            id: 'Home',
            children: [
              {
                component: {
                  name: 'Home',
                  options: {
                    topBar: {
                      visible: false,
                      height: 0
                    }
                  }
                }
              }
          ],
      options: {
          statusBar: {
            backgroundColor: '#3e416e',
            visible: true
          },
        }
      }
    }
  });
});
// startApp();


