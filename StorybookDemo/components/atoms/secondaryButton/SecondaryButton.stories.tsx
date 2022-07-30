// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {SecondaryButton} from './SecondaryButton';

export default {
  title: 'components/SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

export const Basic: ComponentStory<typeof SecondaryButton> = args => (
  <SecondaryButton {...args} />
);

Basic.args = {
  text: 'Hello World',
};
