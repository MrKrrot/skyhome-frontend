import { SubmitProps } from './interface'
import { InputSubmit } from './styles'

export const Submit = ({ text, onClick }: SubmitProps) => {
    return <InputSubmit type='submit' value={text} onClick={onClick} />
}
