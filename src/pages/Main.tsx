import { MainTitle } from '@components'
import { Check, FormContainer, FormTitle, Submit, TextField } from '@components/Forms'
import { FormFooter } from '@components/Forms/FormFooter'
import PasswordLink from '@components/Forms/PasswordLink'

export const Main = () => {
    return (
        <>
            <MainTitle />
            <div>
                <FormContainer>
                    <FormTitle title='Iniciar sesión' />
                    <TextField text='Correo' type='email' />
                    <TextField text='Contraseña' type='password' />
                    <Check />
                    <PasswordLink />
                    <Submit />
                </FormContainer>
                <FormFooter text='¿No tienes una cuenta?' link='Crea una ahora' to='/register' />
            </div>
        </>
    )
}