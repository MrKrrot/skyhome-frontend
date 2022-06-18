import { MainTitle } from '@components'
import { Check, FormContainer, FormTitle, Submit, TextField } from '@components/Forms'
import { ErrorMessage } from '@components/Forms/ErrorMessage'
import { FormFooter } from '@components/Forms/FormFooter'
import { useRegister } from '../hooks/useRegister'
import { breakpoints } from '../helpers/breakpoints'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Register = () => {
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const navigate = useNavigate()

    const [checked, setChecked] = useState(false)

    const [error, setError] = useState({ isError: false, message: '' })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, name: e.target.value })
    }

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, username: e.target.value })
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, email: e.target.value })
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, password: e.target.value })
    }

    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, confirmPassword: e.target.value })
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    const resetError = () => {
        setError({ ...error, isError: false })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (
            !data.name ||
            !data.username ||
            !data.email ||
            !data.password ||
            !data.confirmPassword
        ) {
            setError({ ...error, isError: true, message: 'Hay campos que no se han llenado' })
            setTimeout(resetError, 3000)
        } else if (data.password != data.confirmPassword) {
            setError({ ...error, isError: true, message: 'Las contraseñas no coinciden' })
            setTimeout(resetError, 3000)
        } else if (!checked) {
            setError({
                ...error,
                isError: true,
                message: 'Debes aceptar los términos y condiciones',
            })
            setTimeout(resetError, 3000)
        } else {
            try {
                const res = await useRegister('http://localhost:5000/v1/users/register', data)
                console.log(res)
                localStorage.setItem('token', `Bearer ${res.token}`)
                navigate('/')
            } catch (err) {
                console.log(err)
            }
        }
    }
    return (
        <Container>
            <MainTitle />
            <main>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle title='Registrarse' />
                    <TextField text='Nombre' onChange={handleName} />
                    <TextField text='Nombre de usuario' onChange={handleUsername} />
                    <TextField text='Correo' type='email' onChange={handleEmail} />
                    <TextField text='Contraseña' type='password' onChange={handlePassword} />
                    <TextField
                        text='Confirmar contraseña'
                        type='password'
                        onChange={handleConfirmPassword}
                    />
                    <Check textLabel='Acepto términos y condiciones' onChange={handleCheck} />
                    {error.isError && <ErrorMessage message={error.message} />}
                    <Submit text='Registrarse' />
                </FormContainer>
                <FormFooter text='¿Ya tienes una cuenta?' link='Inicia sesión' to='/login' />
            </main>
        </Container>
    )
}

const Container = styled.div`
    @media (min-width: ${breakpoints.laptop}) {
        height: 100vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`

export default Register
