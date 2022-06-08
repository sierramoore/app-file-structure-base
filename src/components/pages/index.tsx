import React, {FC} from "react";
import { View, Text } from 'react-native';
import { Typography } from "../atoms/typography";

export const Index: FC = () => {
    return (
        <View>
            <Typography type="H2">React Native</Typography>
            <Typography type="H2">Expo</Typography>
            <Typography type="H2">Typescript</Typography>
            <Typography type="H3">Atomic design pattern</Typography>
            <Typography type="P">--base setup--</Typography>
        </View>
    )
}