import { breakpoints } from '@helpers/breakpoints'
import { darkColors } from '@helpers/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ForgotPassword = styled(Link)`
    color: ${darkColors.gray2};
    align-self: flex-end;
    margin-top: 0.5em;
    font-style: italic;
    transition: color 0.25s;
    &:hover {
        color: ${darkColors.gray3};
    }
    @media (min-width: ${breakpoints.laptop}){
        margin-right: 2em;
    }
`
