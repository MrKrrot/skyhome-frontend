import { CheckProps } from './interface'
import { Checkbox, Label, RememberContainer } from './styles'

export const Check = ({ textLabel, onChange }: CheckProps) => {
    return (
        <RememberContainer>
            <Checkbox type='checkbox' name='remember' id='remember' onChange={onChange} />
            <Label htmlFor='remember'>{textLabel}</Label>
        </RememberContainer>
    )
}
