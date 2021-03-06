import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { darkColors } from '@helpers/colors'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${darkColors.black2};
        color: ${darkColors.white1};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
