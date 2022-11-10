import '../styles/globals.css'
import {ThemeProvider, createTheme} from '@mui/material/styles'

function MyApp({Component, pageProps}) {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Ubuntu',
                'Fragment Mono',
                "monospace",
                "sans-serif"
            ].join(","),
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
