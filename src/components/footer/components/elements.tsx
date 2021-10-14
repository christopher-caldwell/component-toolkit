import { styled } from '@mui/material'

export const Container = styled('footer')`
  /* height: 250px; */
  width: 100%;
  padding: 0 6%;
  background-color: #01393d;
  z-index: 10000000;
  position: relative;
  display: flex;
  justify-content: center;
  & * {
    color: white;
  }
`

export const FooterContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 70%;
  padding-bottom: 5vh;
`
export const FooterContent = styled('div')`
  /* display: flex;
  justify-content: space-between;
  flex-direction: column; */
`
export const FooterTitle = styled('h2')`
  color: white;
  margin: 30px 0 10px 0;
`
export const FooterSubtitle = styled('a')`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 3%;
  text-decoration: none;
  justify-content: flex-start;
  transition: all 0.2s;
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
    & * {
      color: ${({ theme: { palette } }) => palette.primary.main};
    }
  }
  & svg {
    height: 0.7em;
    padding-left: 3%;
    & path {
      color: white;
    }
  }
`

export const Copyright = styled('p')`
  margin-top: 5vh;
  color: white;
  text-align: center;
`
