import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

export const RememberContainer = styled.div`
    margin-top: 0.8em;
    align-self: flex-start;
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
    transform: translateY(-0.17em);
    &:checked {
        background-color: ${darkColors.blue};
    }
`

export const Label = styled.label`
    margin-left: 1.5em;
    cursor: pointer;
`
