import { styled } from '@mui/material'
import { Toolbar as MuiToolbar, IconButton } from '@mui/material'

interface DrawerProps {
  isOpen: boolean
}
export const DrawerAction = styled('div')<DrawerProps>`
  width: 100%;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '' : '45%')};
  bottom: ${({ isOpen }) => (isOpen ? '0' : '')};
  ${({ isOpen }) => (isOpen ? 'border-top: 1px dashed black;' : '')}
  display: flex;
  justify-content: center;
  & svg {
    font-size: 1.1em;
  }
`

export const Root = styled('div')`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`

export const Toolbar = styled(MuiToolbar)`
  background-color: ${({
    theme: {
      palette: { mode },
    },
  }) => (mode === 'dark' ? '#242526' : 'white')};
  display: flex;
  justify-content: space-between;
`

export interface TitleProps {
  shouldRemoveTitle?: boolean
}
export const Title = styled('h4')<TitleProps>`
  margin: 0;
  margin-left: 10px;
  transition: all 0.2s ease;
  color: ${({
    theme: {
      palette: { text },
    },
  }) => text.primary};
  ${({
    shouldRemoveTitle,
    theme: {
      palette: { text },
    },
  }) =>
    shouldRemoveTitle
      ? ''
      : `padding-right: 20px;
  border-right: 1px solid ${text.primary};`}
`

export const LogoContainer = styled('div')`
  display: flex;
  align-items: center;
  &:hover {
    & h4 {
      color: ${({ theme: { palette } }) => palette.primary.main};
    }
  }
`

export const Settings = styled('div')`
  display: flex;
  align-items: center;
`

export const GitHubIconButton = styled(IconButton)`
  /* color: white; */
  margin-right: 20px !important;
`

interface ListContainerProps {
  isOpen: boolean
}
export const ListContainer = styled('div')<ListContainerProps>`
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  overflow: scroll;
`

export const LeftGroup = styled('div')`
  display: flex;
  align-items: center;
`

export const HeaderLinkContainer = styled('div')`
  margin-left: 20px;
`

export const HeaderLink = styled('a')`
  color: ${({ theme: { palette } }) => palette.text.primary};
  transition: all 0.2s ease;
  font-weight: bold;
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`
