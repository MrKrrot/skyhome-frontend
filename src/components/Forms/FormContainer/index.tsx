import { FormContainerProps } from './interface'
import { Container, Form } from './styles'

export const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>{children}</Form>
        </Container>
    )
}
