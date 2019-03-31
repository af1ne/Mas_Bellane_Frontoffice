import styled from 'styled-components';


export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;
export const smallMobileThresholdPixels = `${mobileThreshold / 2}px`;
export const smallDesktopThresholdPixels = '1300px';

export const margins = {
  xs: '7px',
  s: '15px',
  m: '30px',
  l: '44px',
  xl: '88px',
};

export const colors = {
  red: '#8e0915',
  lightGrey: '#eaeaea',
  lightGreen: '#ACBFBE',
  darkGreen: '#718f94',
  white: '#FFFFFF',
  whiteTransparent: 'rgba(255, 255, 255, 0.12)',
  black: '#000000',
  blackTransparent: 'rgba(0, 0, 0, 0.60)',
  blue: '#545775'
};

export const BoxShadows = styled.div`
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;
// ****************************************
// ***              Font                ***
// ****************************************

export const fontSizes = {
  xs: '1.5vh',
  s: '2vh',
  m: '2.5vh',
  l: '4vh',
  xl: '5vh',
};

export const lineHeight = {
  xs: '3.5vh',
  s: '2vh',
  m: '3vh',
  l: '32px',
  xl: '44px',
}

// ****************************
// ***       Titles         ***
// ****************************


export const Title1 = styled.h1`
  font-family: 'Bentham';
  color: ${props => props.colors || colors.white};
  padding: 1em;
  justify-content: center;
  text-transform: ${props => props.textTransform || "uppercase"};
  font-weight: 550;
  text-align: center;
  font-size: ${fontSizes.l};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.m};
  }
`;

export const Title2 = styled.h2`
  font-family: 'Montserrat';
  color: ${props => props.colors || colors.white};
  font-weight: 500;
  padding: 1em;
  justify-content: center;
  text-transform: ${props => props.textTransform || "uppercase"};
  text-align: center;
  font-size: ${fontSizes.l};

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.m};
  }
  `;

export const TitleSection = styled.h2`
  font-family: Bentham;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${fontSizes.m};
  text-align: center;
  text-transform: uppercase;
  margin-top: 5vh;

  @media (max-width: ${mobileThresholdPixels}) {
    font-size: ${fontSizes.m};
  }
`;

export const Subtitle = styled(TitleSection)`
  ont-size: ${fontSizes.s};
  margin-top: 0px;
`;

export const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: ${lineHeight.xl};
  font-size: ${fontSizes.m};
  text-align: ${props => props.center ? 'center' : 'justify'};

  @media (max-width: ${mobileThresholdPixels}) {
    line-height: ${lineHeight.xs};
    font-size: ${fontSizes.m};
  }
`;

// ****************************************
// ***              Grid                ***
// ****************************************

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${mobileThresholdPixels}) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;


export const CardsContenaire = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.spaceEvenly ? 'space-evenly' : 'space-between'};
  align-item: strech;
  width: 100%;

  @media (max-width: ${mobileThresholdPixels}) {
    flex-direction: column;
    align-items: center;
  }
`;

// ****************************************
// ***             Background           ***
// ****************************************
export const BackgroundSection = styled.div`
  display: block;
  margin: auto;
  height: ${props => props.height ? props.height : 'auto'};
  background-image: ${props =>
    props.noFilter
      ? ""
      : `linear-gradient(
      ${colors.blackTransparent}, 
      ${colors.blackTransparent}),`}
    url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -10;
`;

// ****************************************
// ***       Section Containers         ***
// ****************************************

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  margin: auto;
  color: ${props => props.white ? 'white' : ''};

  @media (max-width: ${mobileThresholdPixels}) {
    width: 67vw;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
  color: ${props => props.white ? 'white' : ''};


  @media (max-width: ${mobileThresholdPixels}) {
    
  }
  `;

export const ResponsiveImg = styled.img`
  object-fit: cover;
  margin: auto;
  height: 100vh;
  width: 100vw;
  z-index: -2;
  position: absolute;
`;
  // background: ${colors.pictureFilter};

