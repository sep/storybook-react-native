import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {PrimaryButton, SecondaryButton} from './Button';

export default {
  title: 'components/Button',
  component: PrimaryButton,
  subcomponents: {SecondaryButton},
} as ComponentMeta<typeof PrimaryButton>;

export const Primary: ComponentStory<typeof PrimaryButton> = args => (
  <PrimaryButton {...args} />
);

Primary.args = {
  onPress: () => console.log('Hello Button'),
  text: 'Primary Button',
};

export const Secondary: ComponentStory<typeof SecondaryButton> = args => (
  <PrimaryButton {...args} />
);

Secondary.args = {
  onPress: () => console.log('Hello Button'),
  text: 'Secondary Button',
};
