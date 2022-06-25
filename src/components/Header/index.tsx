import { darkColors } from '@helpers/colors'
import styled from 'styled-components'
import avatar_icon from '@assets/img/avatar.png'
import search_icon from '@assets/img/search-icon.png'
import menu_icon from '@assets/img/menu-icon.png'

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <AvatarImg src={avatar_icon} alt='Avatar' />
                <h1>Mis archivos</h1>
            </SubContainer>
            <SubContainer>
                <img src={search_icon} alt='Search Icon' />
                <img src={menu_icon} alt='Menu Icon' />
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8em;
    background-color: ${darkColors.black2};
    height: 96px;
    padding-left: 1em;
    padding-right: 1em;
`

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 4em;
`

const AvatarImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 2em;
    border: 1px solid ${darkColors.black4};
    margin-right: 0.5em;
`
