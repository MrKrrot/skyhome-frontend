import { FunctionComponent } from 'react'
import { Container, Form } from './styles'

export const FormContainer: FunctionComponent = ({ children }) => {
    return (
        <Container>
            <Form>{children}</Form>
        </Container>
    )
}
