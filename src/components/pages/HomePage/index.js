// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import styled from 'styled-components';
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
   > div {
     &:first-child{
       margin-top:2em;
     }
     margin-bottom: 2em;
   }
`
const DivRegular = styled.div`
   font-family: Graphik-Regular-Web;
`
const DivBold = styled.div`
   font-family: Graphik-Bold-Web;
`
const DivEgyp = styled.div`
   font-family: GuardianEgyp-Light-Web;
`
const DivEgypIt = styled.div`
   font-family: GuardianEgyp-Light-It-Web;
`

const DivPrimary = styled.div`
   font-family: ${font('primary')};
`
const HomePage = () => {
  return (
    <Wrapper>
      <DivRegular>Graphik-Regular-Web</DivRegular>
      <DivBold>Graphik-Bold-Web</DivBold>
      <DivEgyp> GuardianEgyp-Light-Web</DivEgyp>
      <DivEgypIt> GuardianEgyp-Light-It-Web</DivEgypIt>

      <DivPrimary> Primary font </DivPrimary>
    </Wrapper>
  )
}

export default HomePage
