import { MainTitle } from '@components'
import { Check, FormContainer, FormTitle, Submit, TextField } from '@components/Forms'
import { ErrorMessage } from '@components/Forms/ErrorMessage'
import { FormFooter } from '@components/Forms/FormFooter'
import PasswordLink from '@components/Forms/PasswordLink'
import { breakpoints } from '@helpers/breakpoints'
import React, { useState } from 'react'
import styled from 'styled-components'

const Main = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState({ isError: false, message: '' })

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, email: e.target.value })
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, password: e.target.value })
    }

    const resetError = () => {
        setError({ ...error, isError: false })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <Container>
            <MainTitle />
            <main>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle title='Iniciar sesión' />
                    <TextField text='Correo' type='email' onChange={handleEmail} />
                    <TextField text='Contraseña' type='password' onChange={handlePassword} />
                    <Check textLabel='Recuérdame' />
                    <PasswordLink />
                    {error.isError && <ErrorMessage message={error.message} />}
                    <Submit text='Iniciar sesión' />
                </FormContainer>
                <FormFooter text='¿No tienes una cuenta?' link='Crea una ahora' to='/register' />
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

export default Main
