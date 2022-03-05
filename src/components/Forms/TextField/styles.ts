import styled from 'styled-components'
import { darkColors } from '@helpers/colors'

export const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    margin-top: 1em;
    background-color: inherit;
    color: ${darkColors.white1};
    border: 0;
    border-bottom: 1px solid ${darkColors.gray1};
    font-size: 1.2em;
`
