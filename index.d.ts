import React from 'react';

export interface BottomAlertProps {
    styleContainerAlert?: object
    styleButton?: object
    styleTextTitle?: object
    styleTextMessage?: object
    statusBarTranslucent?: boolean
    loopAnimation?: boolean
}

export type AlertType = | 'info' | 'success' | 'error'

declare class BottomAlert extends React.Component<BottomAlertProps> {
    onOpenAlert(
        type: AlertType,
        title: string,
        message: string,
    ): void
}

export default BottomAlert;