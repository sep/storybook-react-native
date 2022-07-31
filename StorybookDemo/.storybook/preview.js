import {NativeBaseProvider, Center} from 'native-base'
import {View} from 'react-native'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <NativeBaseProvider>
      <View style={{ justifyContent: 'center', alignItems:'center', flex: 1 }}>
        <Center>
          <Story />
        </Center>
      </View>
    </NativeBaseProvider>
  ),
]