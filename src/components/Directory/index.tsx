import directory_icon from '@assets/img/directory-folder.svg'
import menu_icon from '@assets/img/menu-icon.png'
import { darkColors } from '@helpers/colors'
import styled from 'styled-components'

interface DirectoryProps {
    name: string
    files: number
}

export const Directory = ({ name, files }: DirectoryProps) => {
    return (
        <Container>
            <LeftContainer>
                <img src={directory_icon} alt='Directory' />
                <Wrapper>
                    <DirectoryTitle>{name}</DirectoryTitle>
                    <DirectorySubtitle>
                        {files === 1 ? '1 archivo' : `${files} archivos`}
                    </DirectorySubtitle>
                </Wrapper>
            </LeftContainer>
            <img src={menu_icon} alt='Menu Icon' />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.2em;
    padding-right: 1em;
    height: 3.5em;
    background-color: ${darkColors.black4};
    border-bottom: 1px solid ${darkColors.gray1};
    cursor: pointer;

    &:hover {
        background-color: ${darkColors.black3};
    }
`

const LeftContainer = styled.div`
    display: flex;
`

const Wrapper = styled.div`
    margin-left: 1em;
`

const DirectoryTitle = styled.p`
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
    color: ${darkColors.white1};
`

const DirectorySubtitle = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: ${darkColors.gray2};
    font-size: 0.7em;
`
