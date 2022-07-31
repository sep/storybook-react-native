import React from 'react';
import StorybookUIRoot from './.ondevice/Storybook';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <NativeBaseProvider>
      <StorybookUIRoot />
    </NativeBaseProvider>
  );
}

export default App;
