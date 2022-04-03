import { SubmitProps } from './interface'
import { InputSubmit } from './styles'

export const Submit = ({ text }: SubmitProps) => {
    return <InputSubmit type='submit' value={text} />
}
