import { MainTitle } from '@components'
import { Check, FormContainer, FormTitle, Submit, TextField } from '@components/Forms'
import { FormFooter } from '@components/Forms/FormFooter'

export const Register = () => {
    return (
        <>
            <MainTitle />
            <main>
                <FormContainer>
                    <FormTitle title='Registrarse' />
                    <TextField text='Nombre' />
                    <TextField text='Nombre de usuario' />
                    <TextField text='Correo' type='email' />
                    <TextField text='Contraseña' type='password' />
                    <TextField text='Confirmar contraseña' type='password' />
                    <Check textLabel='Acepto términos y condiciones' />
                    <Submit />
                </FormContainer>
                <FormFooter text='¿Ya tienes una cuenta?' link='Inicia sesión' to='/' />
            </main>
        </>
    )
}
