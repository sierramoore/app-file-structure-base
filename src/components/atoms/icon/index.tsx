import React, { FC } from 'react';
import { Icons } from './icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { colors } from '../../../global/colors';

export type IconProps = {
    name: Icons,
    active?: boolean,
    color?: string,
    size?: number
}

export const Icon:FC<IconProps> = ({...props}) => {
    switch(props.name){
        case Icons.location:
            return <MaterialIcons name={Icons.location} size={20} color={colors.primary} alt="location pin" />;
        case Icons.heart:
            return <Ionicons name={Icons.heart} size={20} color={colors.primary} alt="heart-icon" />;
        case Icons.heartOutline:
            return <Ionicons name={Icons.heartOutline} size={20} color={colors.primary} alt="heart-icon" />;
        case Icons.arrowRight:
            return <MaterialIcons name={Icons.arrowRight} size={20} color={colors.primary} alt="right arrow" />;
        default:
            console.log('Please choose an icon')
            return <></>;
    }
}
