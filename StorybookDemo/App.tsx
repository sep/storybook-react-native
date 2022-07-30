import { ThemeProvider } from "@shopify/restyle";
import StorybookUIRoot from "./.ondevice/Storybook";
import theme from './components/theme'

function App() {
    <ThemeProvider theme={theme}>
        <StorybookUIRoot/>
    </ThemeProvider>
}

export default App;
