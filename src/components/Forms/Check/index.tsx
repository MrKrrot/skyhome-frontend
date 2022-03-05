import { CheckProps } from './interface'
import { Checkbox, Label, RememberContainer } from './styles'

export const Check = ({ textLabel }: CheckProps) => {
    return (
        <RememberContainer>
            <Checkbox type='checkbox' name='remember' id='remember' />
            <Label htmlFor='remember'>{textLabel}</Label>
        </RememberContainer>
    )
}
