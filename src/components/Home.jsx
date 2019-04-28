import React from 'react';
import styled from 'styled-components';
import { colors, Container } from './StyledComponents';
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
  margin: auto;
  background-color: ${colors.lightGrey};
`;

const BackgroundContainer = styled.div`
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
      <Container bkgColor={colors.lightGreen}>
        <Ecotourism />
      </Container>
    </BackgroundContainer>
    <Around />
    <BackgroundContainer color={colors.darkGreen}>
      <Container bkgColor={colors.darkGreen}>
        <ContactUs />
      </Container>
    </BackgroundContainer>
    <BackgroundContainer color={colors.lightGreen}>
      <Footer />
    </BackgroundContainer>
  </App>
);


export default Home;
