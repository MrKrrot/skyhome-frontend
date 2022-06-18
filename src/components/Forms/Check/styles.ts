import { breakpoints } from '@helpers/breakpoints'
import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

export const RememberContainer = styled.div`
    margin-top: 0.8em;
    align-self: flex-start;
    @media screen and (min-width: ${breakpoints.laptop}){
        margin-left: 2em;
    }
`

export const Checkbox = styled.input`
    position: absolute;
    left: 0;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid ${darkColors.white1};
    border-radius: 0.15em;
    &:checked {
        background-color: ${darkColors.blue};
    }
    @media screen and (min-width: ${breakpoints.laptop}){
        margin-left: 2.5em;
    }
`

export const Label = styled.label`
    margin-left: 1.4em;
    cursor: pointer;
`
