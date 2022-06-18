import { TextFieldProps } from './interface'
import { Input } from './styles'

export const TextField = ({ text, type, onChange }: TextFieldProps) => {
    return <Input type={type ? type : 'text'} placeholder={text} onChange={onChange} required />
}
