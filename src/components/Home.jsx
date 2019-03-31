import React from 'react';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from './StyledComponents';
import MenuModal from './commun/MenuModal';
import Cover from './screen/Cover';
import Place from './screen/Place';
import Rooms from './screen/Rooms';
import Annexes from './screen/Annexes';
import HostTable from './screen/HostTable';
import OurHistory from './screen/OurHistory';
import Ecotourism from './screen/Ecotourism';
import Around from './screen/Around';
import ContactUs from './screen/ContactUs';
import Footer from './screen/Footer';

const App = styled.div`
  width: 100vw;
  margin: auto;
  background-color: ${colors.lightGrey};
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.color ? props.color : colors.lightGrey)};
  width: 75vw;
  margin: auto;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 67vw;
  }
`;

const BackgroundContainer = styled.div`
  width: 100vw;
  background-color: ${props => (props.color ? props.color : colors.lightGrey)};
`;

const Home = () => (
  <App>
    <MenuModal />
    <Cover />
    <Container>
      <Place />
      <Rooms />
      <Annexes />
    </Container>
    <HostTable />
    <OurHistory />
    <BackgroundContainer color={colors.lightGreen}>
      <Container color={colors.lightGreen}>
        <Ecotourism />
      </Container>
    </BackgroundContainer>
    <Around />
    <BackgroundContainer color={colors.darkGreen}>
      <Container color={colors.darkGreen}>
        <ContactUs />
      </Container>
    </BackgroundContainer>
    <BackgroundContainer color={colors.lightGreen}>
      <Footer />
    </BackgroundContainer>
  </App>
);


export default Home;
