import React, {FC} from "react";
import { Image } from 'react-native';
import styled from 'styled-components';
import { AvatarProps } from ".";

type StyledProps = {
    width?: string,
    height?: string
}

const ListAvatarStyle = styled(Image)<StyledProps>`
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  border-bottom-right-radius: 45px;
  border-bottom-left-radius: 45px;
  resize-mode: cover;
  overflow: hidden;
  height: 90px;
  width: 90px;
  margin: 10px;
`;

export const ListAvatar: FC<AvatarProps> = (props) => {
    return <ListAvatarStyle source={props.source} />
}