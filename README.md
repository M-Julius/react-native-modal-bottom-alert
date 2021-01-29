# react-native-modal-bottom-alert


![alt text](./sample.gif)
## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Set Global](#set-global)
- [Props](#props)

## Installation
```bash
$ yarn add react-native-modal-bottom-alert lottie-react-native
```
Or
```bash
$ npm install react-native-modal-bottom-alert lottie-react-native --save
```


## Basic Usage
```javascript
import ModalBottomAlert from 'react-native-modal-bottom-alert';

onOpenAlert() {
    this.modalBottom.onOpenAlert('info', 'This Title', 'This Message Example Info')
}

onOpenAlertButtonPressed() {
    // onOpenAlert parameters: type, title, message, function
    // parameter type: 'success', 'info', 'error'
    // parameter title: 'string'
    // parameter message: 'string'
    // parameter function: function, default null'
    this.modalBottom.onOpenAlert('error', 'This Title', 'This Message Example Error', () => console.log('This Button Try Again Pressed'))
}

return (
    <>
        <Button
          title={'Open Alert'}
          onPress={() => this.onOpenAlert()}
        />
        <Button
          title={'Open Alert Button Preesed'}
          onPress={() => this.onOpenAlertButtonPressed()}
        />
        <ModalBottomAlert
            ref={(ref) => this.modalBottom = ref}
        />
    </>
)
```

## Set Global

##### 1. Create Service For Alert
```js
// BottomAlert.js
let alert

function setAlertBottomRef(ref) {
    alert = ref
}

function BottomAlert(type, title, message, otherFunction) {
    alert.onOpenAlert(type, title, message, otherFunction)
}

export {
    BottomAlert,
    setAlertBottomRef
}

```

##### 2. Add Modal Bottom Alert on Root App 
```js
// Root.js
import store from './reduxStore';
import React from 'react';
import { Provider } from 'react-redux';
import ModalBottomAlert from 'react-native-modal-bottom-alert';
import { setAlertBottomRef } from './BottomAlert'; // Add This For Set Alert

let App = () => (
  <Navigator>
    <MainScreen />
    <OtherScreen />
  </Navigator>
);

const Root = () => (
  <Provider store={store}>
    <App />
    {/* Add This */}
    <ModalBottomAlert ref={(ref) => setAlertBottomRef(ref) }/> 
  </Provider>
);
```

##### 3. Add on your screen 
```js
// Screen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomAlert } from './BottomAlert'; // Add This On Your Screen For Call Alert

export default class App extends Component {

  onOpenAlert() {
    BottomAlert('info', 'This Title', 'This Message Example Info', () => this.onDonePress())
  }

  onDonePress = () => {
    console.log('Pressed')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Modal Bottom Alert example</Text>
        <Button
          title={'Info'}
          onPress={() => this.onOpenAlert()}
        />
        <Button
          title={'Error'}
          onPress={() => BottomAlert('error', 'This Title', 'This Message Example Error')}
        />
        <Button
          title={'Success'}
          onPress={() => BottomAlert('success', 'This Title', 'This Message Example Success')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

```


### Props

#### Basic

| Prop                     | Type      | Description                                    | Default |
| :----------------------- | :-------: | :--------------------------------------------: | :------ |
| statusBarTranslucent     | `boolean` | Status Bar Translucent                         | false   |
| loopAnimation            | `boolean` | Animation Loop For Lottie Icon                 | false   |

#### Styling

| Prop                   | Type     | Description                  | Default |
| :--------------------- | :------: | :--------------------------: | :------ |
| styleTextTitle         | `object` | Text Title Style             | -       |
| styleTextMessage       | `object` | Text Message Style           | -       |
| styleTextButton        | `object` | Text Button Style            | -       |
| styleButton            | `object` | Button Style                 | -       |
| styleContainerAlert    | `object` | Container Style Alert        | -       |