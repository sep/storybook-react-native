import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {PrimaryButton} from './PrimaryButton';

export default {
  title: 'components/PrimaryButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

export const Basic: ComponentStory<typeof PrimaryButton> = args => (
  <PrimaryButton {...args} />
);

Basic.args = {
  text: 'Hello World',
};
