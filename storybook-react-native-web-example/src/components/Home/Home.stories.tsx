import {ComponentMeta} from '@storybook/react';
import { NativeBaseProvider } from 'native-base';
import {Home} from './Home';

export default {
    title: 'Screens/Home',
    component: Home,
    decorators: [
        Story => (
            <NativeBaseProvider>
            <Story />
            </NativeBaseProvider>
        ),
    ],
} as ComponentMeta<typeof Home>;

export const Basic = {
    args: {}
}
// export const LoggedIn = {
//   args: HeaderStories.LoggedIn.args,
// };

// export const LoggedOut = {
//   args: HeaderStories.LoggedOut.args,
// };
