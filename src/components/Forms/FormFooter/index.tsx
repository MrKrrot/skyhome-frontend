import { FormFooterProps } from './interface'
import { Footer, FooterLink } from './styles'

export const FormFooter = ({ text, link, to }: FormFooterProps) => {
    return (
        <Footer>
            {text} <FooterLink to={to}>{link}</FooterLink>
        </Footer>
    )
}
