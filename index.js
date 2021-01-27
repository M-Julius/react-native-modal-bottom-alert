import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, Dimensions, TouchableOpacity } from 'react-native';
import LottieFiles from 'lottie-react-native'
import PropTypes from 'prop-types'


const { height, width } = Dimensions.get('window')

const animationFailed = require('./assets/failed-animation.json')
const animationSuccess = require('./assets/succes-animation.json')
const animationInfo = require('./assets/info-animation.json')

class BottomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            buttonColor: '#1BC057',
            lottieAnimation: animationSuccess,
            title: '',
            message: '',
            buttonTitle: 'OK',
            pressed: null
        };
    }

    onOpenAlert = async (type = '', title = '', message = '', onButtonPress = () => { }) => {
        this.setState({ pressed: onButtonPress })
        switch (type) {
            case 'success':
                return this.onSetAlertSuccess(title, message)
            case 'info':
                return this.onSetAlertInfo(title, message)
            case 'error':
                return this.onSetAlertError(title, message)
            default:
                return this.onSetAlertSuccess(title, message)
        }
    }

    onSetAlertSuccess(title, message) {
        this.setState({
            showAlert: true,
            buttonColor: '#1BC057',
            lottieAnimation: animationSuccess,
            title: title,
            message: message,
            buttonTitle: 'Done'
        })
    }

    onSetAlertError(title, message) {
        return this.setState({
            showAlert: true,
            buttonColor: '#EA5455',
            lottieAnimation: animationFailed,
            title: title,
            message: message,
            buttonTitle: 'Try Again'
        })
    }

    onSetAlertInfo(title, message) {
        return this.setState({
            showAlert: true,
            buttonColor: '#FDA900',
            lottieAnimation: animationInfo,
            title: title,
            message: message,
            buttonTitle: 'OK'
        })
    }

    onButtonPress = () => {
        this.setState({ showAlert: false })
        this.state?.pressed() ?? null
    }


    render() {
        const {
            showAlert,
            buttonColor,
            lottieAnimation,
            message,
            title,
            buttonTitle
        } = this.state
        const {
            styleButton,
            styleTextTitle,
            styleTextMessage,
            styleTextButton,
            styleContainerAlert,
            statusBarTranslucent,
            loopAnimation
        } = this.props

        return (
            <Modal
                ref={ref => (this.mainView = ref)}
                animationType='slide'
                statusBarTranslucent={statusBarTranslucent ?? false}
                transparent={true}
                visible={showAlert}
            >
                <View style={styles.container}>
                    <View style={[styles.containerAlert, { ...styleContainerAlert }]}>
                        <LottieFiles
                            loop={loopAnimation ?? false}
                            style={{ width: 200, height: 200, }}
                            source={lottieAnimation}
                            autoSize
                            resizeMode={'cover'}
                            autoPlay
                        />
                        <Text style={[styles.title, { ...styleTextTitle }]} >{title}</Text>
                        <Text style={[styles.message, { ...styleTextMessage }]}>{message}</Text>
                        <TouchableOpacity onPress={() => this.onButtonPress()} style={[styles.buttonAlert, { backgroundColor: buttonColor, ...styleButton }]}>
                            <Text style={[styles.buttonTitle, { ...styleTextButton }]}>{buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

BottomAlert.propTypes = {
    styleTextTitle: PropTypes.object,
    styleTextMessage: PropTypes.object,
    styleTextButton: PropTypes.object,
    styleButton: PropTypes.object,
    styleContainerAlert: PropTypes.object,
    statusBarTranslucent: PropTypes.bool,
    loopAnimation: PropTypes.bool
}


BottomAlert.defaultProps = {
    styleButton: {},
    styleTextTitle: {},
    styleTextMessage: {},
    styleTextButton: {},
    styleContainerAlert: {},
    statusBarTranslucent: false,
    loopAnimation: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    containerAlert: {
        width: width,
        height: height * 0.60,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonAlert: {
        marginBottom: 15,
        width: width * 0.80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20
    },
    message: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonTitle: {
        marginVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default BottomAlert