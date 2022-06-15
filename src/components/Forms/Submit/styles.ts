import { breakpoints } from '@helpers/breakpoints'
import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

export const InputSubmit = styled.input`
    background-color: ${darkColors.blue};
    color: ${darkColors.white1};
    border: 0;
    margin-top: 2em;
    padding: 0.5em 2em;
    border-radius: 8px;
    font-size: 1.2em;
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: ${darkColors.blue}e8;
    }
    @media screen and (min-width: ${breakpoints.laptop}){
        width: 8em;
        align-self: flex-start;
        margin-bottom: 1em;
        margin-left: 2em;
        padding: 0.5em;
    }
`
