import { Navigation } from 'react-native-navigation'


export const setRoot = (name) => Navigation.setRoot({
    root: {
      stack: {
        id: 'Intro',
        children: [
          {
            component: {
              name: name,
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

export const pushScreen = (id, name, props) => Navigation.push(id, {
    component: {
      name: name,
      passProps: {
        item: props
      },
      options: {
        topBar: {
          visible: false,
          height: 0
        }
      }
    }
});