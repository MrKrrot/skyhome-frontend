import logo from '@assets/img/logo.svg'
import styled from 'styled-components'

export const MainTitle = () => {
    return (
        <Header>
            <Logo src={logo} alt='SkyHome Logo' />
            <TitleContainer>
                <Title>SkyHome</Title>
                <Subtitle>Tus archivos en la comodidad de tu hogar</Subtitle>
            </TitleContainer>
        </Header>
    )
}

const Logo = styled.img`
    width: 80px;
`
const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
`
const TitleContainer = styled.div`
    margin-left: 0.3em;
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
`

const Subtitle = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.6em;
`
