import { darkColors } from '@helpers/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = styled.p`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-size: 0.75em;
    height: 48px;
    width: 100%;
    background-color: ${darkColors.black4};
`

export const FooterLink = styled(Link)`
    color: ${darkColors.blue};
    text-decoration: none;
    margin-left: 0.3em;
`
