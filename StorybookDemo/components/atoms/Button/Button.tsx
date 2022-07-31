import React from 'react';
import {Button} from 'native-base';

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

export function PrimaryButton(props: ButtonProps) {
  const {onPress, text} = props;
  return (
    <Button
      shadow={2}
      onPress={onPress}
      size="md"
      colorScheme="primary"
      variant="solid">
      {text}
    </Button>
  );
}

export function SecondaryButton(props: ButtonProps) {
  const {onPress, text} = props;
  return (
    <Button
      shadow={2}
      onPress={onPress}
      size="md"
      colorScheme="secondary"
      variant="subtle">
      {text}
    </Button>
  );
}
