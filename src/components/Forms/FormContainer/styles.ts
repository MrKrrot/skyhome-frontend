import { breakpoints } from '@helpers/breakpoints'
import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    min-height: calc(100vh - (80px + 32px) - (48px + 24px));
    @media screen and (min-width: ${breakpoints.laptop}){
        min-height: auto;
        width: 480px;
        background-color: ${darkColors.black4};
        border-radius: 20px 20px 0 0;
        border: 1px solid ${darkColors.gray1};
        border-bottom: 0;
    }
`

export const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`
