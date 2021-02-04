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


export function showBottomAlert(
    type: AlertType,
    title: string,
    message: string,
    action: Function
): void


export function useRefBottomAlert(
    ref: Function,
): void


export class BottomAlert extends React.Component<BottomAlertProps> {
    onOpenAlert(
        type: AlertType,
        title: string,
        message: string,
        action: Function
    ): void
}
