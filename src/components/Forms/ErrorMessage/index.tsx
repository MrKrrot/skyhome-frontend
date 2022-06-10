import { ErrorMessageProps } from './interface'
import { ErrorContainer } from './styles'

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return <ErrorContainer>{message}</ErrorContainer>
}
