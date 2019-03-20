import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, Title1 as OriginTitle, mobileThresholdPixels } from '../StyledComponents';
import Button from '../commun/Button';
import fakeImage from '../../assets/images/fakePhotoEau.png';

const radius = '100%';

const RoundCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 180px;
    align-items: center;
  }
`;

const Title1 = styled(OriginTitle)`
  padding: 0px;
  font-size: ${fontSizes.m};
  color: black;
`;

const Round = styled.div`
  width: 250px;
  height: 250px;
  border-radius: ${radius};
  background-image: url(${fakeImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointeur;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 180px;
    height: 180px;
  }

  :hover {
    border-radius: ${radius};
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.25), 0 10px 25px rgba(0, 0, 0, 0.22);
  }
`;

const Background = styled.div`
  background: linear-gradient(180deg, rgba(51, 51, 51, 0.2) 0%, rgba(51, 51, 51, 0.2) 100%), url(${fakeImage});
  background-size: cover;
  repeat: no-repeat;
  height: 80%;
  border-radius: ${radius};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  @media (max-width: ${mobileThresholdPixels}) {

  }
  :hover {
    background-image: url(${fakeImage});
  }
`;

const RoundCard = ({ title, label }) => (
  <RoundCardContainer>
    <Title1>
      Titre de la card
      {/* {title} */}
    </Title1>
    {/* <Background /> */}
    <Round />
  </RoundCardContainer>
);

export default RoundCard;
