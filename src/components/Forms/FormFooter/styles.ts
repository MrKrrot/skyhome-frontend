import { breakpoints } from '@helpers/breakpoints'
import { darkColors } from '@helpers/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 0;
    font-size: 0.75em;
    height: 48px;
    width: calc(100% - 2px);
    background-color: ${darkColors.black4};
    @media screen and (min-width: ${breakpoints.laptop}){
        margin-top: 0;
        background-color: ${darkColors.black2};
        border-radius: 0 0 20px 20px;
        border: 1px solid ${darkColors.gray1};
        border-top: 0;
        font-size: 1em;
    }
`

export const FooterLink = styled(Link)`
    color: ${darkColors.blue};
    margin-left: 0.3em;
`
