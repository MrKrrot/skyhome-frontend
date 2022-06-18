import logo from '@assets/img/logo.svg'
import { breakpoints } from '@helpers/breakpoints'
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
    @media screen and (min-width: ${breakpoints.laptop}){
        width: 180px;
    }
    @media screen and (min-width: ${breakpoints.desktop}){
        width: 360px;
        margin-right: 1em;
    }
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
    @media screen and (min-width: ${breakpoints.laptop}){
        font-size: 3em;
    }
    @media screen and (min-width: ${breakpoints.desktop}){
        font-size: 4.5em;
    }
`

const Subtitle = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.6em;
    @media screen and (min-width: ${breakpoints.laptop}){
        font-size: 0.8em;
    }
    @media screen and (min-width: ${breakpoints.desktop}){
        font-size: 1.5em;
    }
`
