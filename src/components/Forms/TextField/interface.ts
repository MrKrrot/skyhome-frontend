export interface TextFieldProps {
    text: string
    type?: React.HTMLInputTypeAttribute
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
