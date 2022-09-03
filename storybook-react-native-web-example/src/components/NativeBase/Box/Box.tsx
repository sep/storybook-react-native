import React from 'react';
import {Box as BaseBox} from 'native-base';

interface boxProps {
  text: string;
}

export const Box = ({text}: boxProps) => {
  return <BaseBox>{text}</BaseBox>;
};
