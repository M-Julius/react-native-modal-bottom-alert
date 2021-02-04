# react-native-modal-bottom-alert


![alt text](./sample.gif)
## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Set Global](#set-global-alert)
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
import { BottomAlert } from 'react-native-modal-bottom-alert';

onOpenAlert() {
    this.modalBottom.onOpenAlert('info', 'This Title', 'This Message Example Info')
}

onOpenAlertButtonPressed() {
    // onOpenAlert parameters: type, title, message, function
    // parameter type: 'success', 'info', 'error'
    // parameter title: 'string'
    // parameter message: 'string'
    // parameter action: function, default null'
    this.modalBottom.onOpenAlert('error', 'This Title', 'This Message Example Error', () => console.log('This Button Try Again Pressed'))
}

return (
    <>
        <Button
          title={'Open Alert'}
          onPress={() => this.onOpenAlert()}
        />
        <Button
          title={'Open Alert Button Preesed With Action'}
          onPress={() => this.onOpenAlertButtonPressed()}
        />
        <BottomAlert
            ref={(ref) => this.modalBottom = ref}
        />
    </>
)
```

## Set Global Alert

### 1. Add Modal Bottom Alert on Root App 
```js
// Root.js
import store from './reduxStore';
import React from 'react';
import { Provider } from 'react-redux';
import { useRefBottomAlert, BottomAlert } from 'react-native-modal-bottom-alert'; // Add This For Set Alert

let App = () => (
  <Navigator>
    <MainScreen />
    <OtherScreen />
  </Navigator>
);

const Root = () => (
  <Provider store={store}>
    <App />
    {/* Add This on root app */}
    <BottomAlert ref={(ref) => useRefBottomAlert(ref) }/> 
  </Provider>
);
```

### 2. Add on your screen or other function
```js
// Screen.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { showBottomAlert } from 'react-native-modal-bottom-alert'; // Add This On Your Screen For Call Alert

export default class App extends Component {

  onOpenAlert() {
    showBottomAlert('info', 'This Title', 'This Message Example Info', () => this.onDonePress())
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
          onPress={() => showBottomAlert('error', 'This Title', 'This Message Example Error')}
        />
        <Button
          title={'Success'}
          onPress={() => showBottomAlert('success', 'This Title', 'This Message Example Success')}
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


## Props

### Basic

| Prop                     | Type      | Description                                    | Default |
| :----------------------- | :-------: | :--------------------------------------------: | :------ |
| statusBarTranslucent     | `boolean` | Status Bar Translucent                         | false   |
| loopAnimation            | `boolean` | Animation Loop For Lottie Icon                 | false   |

### Styling

| Prop                   | Type     | Description                  | Default |
| :--------------------- | :------: | :--------------------------: | :------ |
| styleTextTitle         | `object` | Text Title Style             | -       |
| styleTextMessage       | `object` | Text Message Style           | -       |
| styleTextButton        | `object` | Text Button Style            | -       |
| styleButton            | `object` | Button Style                 | -       |
| styleContainerAlert    | `object` | Container Style Alert        | -       |