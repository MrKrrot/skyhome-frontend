import { MainTitle } from '@components'
import { Check, FormContainer, FormTitle, Submit, TextField } from '@components/Forms'
import { FormFooter } from '@components/Forms/FormFooter'
import PasswordLink from '@components/Forms/PasswordLink'

const Main = () => {
    return (
        <>
            <MainTitle />
            <main>
                <FormContainer>
                    <FormTitle title='Iniciar sesión' />
                    <TextField text='Correo' type='email' />
                    <TextField text='Contraseña' type='password' />
                    <Check textLabel='Recuérdame' />
                    <PasswordLink />
                    <Submit />
                </FormContainer>
                <FormFooter text='¿No tienes una cuenta?' link='Crea una ahora' to='/register' />
            </main>
        </>
    )
}

export default Main
