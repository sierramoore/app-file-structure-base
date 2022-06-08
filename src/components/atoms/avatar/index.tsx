import React, { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import { ListAvatar } from './listAvatar';

export interface AvatarProps {
    source: ImageSourcePropType;
    height?: string;
    width?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    return <ListAvatar  
        source={props.source}
    />
}