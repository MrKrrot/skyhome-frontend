import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

export const ErrorContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 90vw;
    height: 3em;
    background-color: ${darkColors.red};
    color: ${darkColors.white1};
    border-radius: 0.5em;
    border: 2px solid #c32525;
    margin-top: 1em;
    font-size: 0.95em;
`
