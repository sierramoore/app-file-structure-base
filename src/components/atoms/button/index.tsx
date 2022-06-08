import React, { FC } from 'react';
import { PrimaryBtn } from './primaryBtn';


export enum ButtonType { primary = "PRIMARY"}

interface Btn {
    type: ButtonType
}

export interface BtnProps {
    onClick: () => void;
    active?: boolean;
    height?: string;
    width?: string;

}

export const Button:FC<BtnProps & Btn> = (props) => {

    switch(props.type){
        case ButtonType.primary:
            return <PrimaryBtn {...props}/>
        default:
            console.log('Please choose a button')
            return <></>
    }
}