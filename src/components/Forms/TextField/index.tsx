import { TextFieldProps } from './interface'
import { Input } from './styles'

export const TextField = ({ text, type }: TextFieldProps) => {
    return <Input type={type ? type : 'text'} placeholder={text} />
}
