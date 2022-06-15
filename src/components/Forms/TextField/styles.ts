import styled from 'styled-components'
import { darkColors } from '@helpers/colors'
import { breakpoints } from '@helpers/breakpoints'

export const Input = styled.input`
    width: 92%;
    padding: 0.5em;
    margin-top: 1em;
    background-color: inherit;
    color: ${darkColors.white1};
    border: 0;
    border-bottom: 1px solid ${darkColors.gray1};
    font-size: 1.2em;
    @media screen and (min-width: ${breakpoints.laptop}){
        width: 80%;
    }
`
