import React, { FC } from 'react';
import { NewBadge } from './newBadge';
import { TimeBadge } from './timeBadge';

export enum BadgeTypes { new = 'NEW', time = "TIME" }

interface Badge {
    type: BadgeTypes;
}

export interface BadgeStyleProps {
    text: string;
    active?: boolean;
    height?: string;
    width?: string;
}

export type BadgeProps = Badge & BadgeStyleProps

export const Badge:FC<BadgeProps> = ({...props}) => {
    switch(props.type){
        case BadgeTypes.new:
            return <NewBadge {...props} />
        case BadgeTypes.time:
            return <TimeBadge {...props} />
        default:
            console.log('Please choose a badge')
            return <></>
    }
}