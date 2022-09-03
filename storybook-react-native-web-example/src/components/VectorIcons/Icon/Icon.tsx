import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {materialIcons} from './icons.type';
type Props = {
  name: keyof materialIcons,
  color: string,
};
export const Icon = ({name, color}: Props) => {
  return <MaterialCommunityIcons size={72} name={name} color={color} />;
};
