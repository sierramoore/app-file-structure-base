import React, {FC} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { BtnProps } from ".";
import {colors} from '../../../global/colors'

const PrimaryBtnStyle = styled(TouchableOpacity)`
    background-color: rgba(${colors.primary}, .7);
    color: ${colors.primary};
    padding: 8px 10px;
`;

export const PrimaryBtn: FC<BtnProps> = (props) => {
    return <PrimaryBtnStyle {...props}>{props.children}</PrimaryBtnStyle>
}