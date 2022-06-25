import styled from 'styled-components'
import { darkColors } from '@helpers/colors'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <Container>
            <ListContainer>
                <li>
                    <NavLink to='/'>
                        <FileIcon
                            width='32'
                            height='28'
                            viewBox='0 0 32 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M32 6.41667C32 5.33371 31.6067 4.29509 30.9065 3.52932C30.2064 2.76355 29.2568 2.33334 28.2667 2.33334H13.6073C13.2917 2.33445 12.9828 2.23293 12.72 2.04167L10.8667 0.686154C10.253 0.237289 9.53095 -0.00157249 8.79267 7.79076e-06H3.73333C2.74319 7.79076e-06 1.7936 0.430215 1.09347 1.19599C0.393332 1.96176 0 3.00037 0 4.08334V7.58334C0 7.73805 0.0561903 7.88642 0.15621 7.99582C0.256229 8.10522 0.391885 8.16667 0.533333 8.16667H31.4667C31.6081 8.16667 31.7438 8.10522 31.8438 7.99582C31.9438 7.88642 32 7.73805 32 7.58334V6.41667Z' />
                            <path d='M0 23.9167C0 24.9996 0.393332 26.0382 1.09347 26.804C1.7936 27.5698 2.74319 28 3.73333 28H28.2667C29.2568 28 30.2064 27.5698 30.9065 26.804C31.6067 26.0382 32 24.9996 32 23.9167V11.0833C32 10.9286 31.9438 10.7803 31.8438 10.6709C31.7438 10.5615 31.6081 10.5 31.4667 10.5H0.533333C0.391885 10.5 0.256229 10.5615 0.15621 10.6709C0.0561903 10.7803 0 10.9286 0 11.0833V23.9167Z' />
                        </FileIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <Icon
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16 0C7.15689 0 0 7.15607 0 16C0 24.8432 7.15607 32 16 32C24.8432 32 32 24.8439 32 16C32 7.15675 24.8439 0 16 0ZM16.7883 16.663L12.427 21.8482C12.0608 22.2836 11.411 22.3396 10.9757 21.9735C10.5404 21.6073 10.4843 20.9575 10.8505 20.5222L14.97 15.6244V3.98469C14.97 3.41584 15.4312 2.95466 16 2.95466C16.5688 2.95466 17.03 3.41584 17.03 3.98469V16C17.03 16.2425 16.9444 16.4774 16.7883 16.663Z' />
                        </Icon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <FavoriteIcon
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_265_329)'>
                                <path d='M30.804 11.3403L21.44 9.97869L17.2507 1.49132C16.739 0.454442 15.2605 0.454504 14.7488 1.49132L10.5597 9.97875L1.19566 11.3403C0.0515304 11.5067 -0.405282 12.9127 0.422593 13.7198L7.19809 20.3249L5.59934 29.6525C5.40403 30.792 6.60009 31.661 7.62347 31.123L15.9032 26.7197L24.2797 31.1229C25.3993 31.6609 26.5954 30.7919 26.4001 29.6524L24.8015 20.3249L31.577 13.7196C32.405 12.9126 31.9482 11.5066 30.804 11.3403Z' />
                            </g>
                            <defs>
                                <clipPath id='clip0_265_329'>
                                    <rect width='32' height='32' fill='white' />
                                </clipPath>
                            </defs>
                        </FavoriteIcon>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <Icon
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M28.059 4.55354H21.5516V2.41319C21.5517 1.08287 20.4688 0 19.1384 0H12.8606C11.5302 0 10.4483 1.08287 10.4483 2.41319V4.55354H3.94062C2.61014 4.55354 1.52832 5.63641 1.52832 6.96681V10.1052C1.52832 10.6566 1.97493 11.1033 2.52639 11.1033H5.1462V29.5877C5.1462 30.9181 6.2281 32 7.55851 32H24.8149C26.1453 32 27.2281 30.9181 27.2281 29.5877V11.1033H29.4737C30.0244 11.1033 30.4718 10.6567 30.4718 10.1052V6.96681C30.4718 5.63641 29.3894 4.55354 28.059 4.55354ZM12.4445 2.41319C12.4445 2.1832 12.6316 1.99605 12.8606 1.99605H19.1384C19.3684 1.99605 19.5556 2.1832 19.5556 2.41319V4.55354H12.4445V2.41319Z' />
                        </Icon>
                    </NavLink>
                </li>
            </ListContainer>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: ${darkColors.black3};
`

const ListContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    height: inherit;
    list-style: none;
`

const SidebarIcon = styled.svg`
    fill: ${darkColors.gray2};
`

const FileIcon = styled(SidebarIcon)`
    &:hover {
        fill: #fedea1;
    }
`

const FavoriteIcon = styled(SidebarIcon)`
    &:hover {
        fill: ${darkColors.yellow};
    }
`

const Icon = styled(SidebarIcon)`
    &:hover {
        fill: ${darkColors.white2};
    }
`
