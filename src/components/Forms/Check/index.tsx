import { Checkbox, Label, RememberContainer } from './styles'

export const Check = () => {
    return (
        <RememberContainer>
            <Checkbox type='checkbox' name='remember' id='remember' />
            <Label htmlFor='remember'>Recuérdame</Label>
        </RememberContainer>
    )
}
