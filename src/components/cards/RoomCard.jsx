import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, Title1, mobileThresholdPixels } from '../StyledComponents';
import Button from '../commun/Button';
import fakeImage from '../../assets/images/photos/fakePhotoEau.png';

const radius = '0.5rem';

const Card = styled.div`
  width: 30%;
  height: 50vh;
  background-color: ${colors.white};
  border-radius: ${radius};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointeur;

  @media (max-width: ${mobileThresholdPixels}) {
    width: 100%;
    height: 50vh;
    margin-top: 2.5vh;
    margin-bottom: 2.5vh;
  }

  :hover {
    border-radius: ${radius};
    box-shadow: 0 14px 35px rgba(0,0,0,0.25), 0 10px 25px rgba(0,0,0,0.22);
  }
`;

const Background = styled.div`
  background: linear-gradient(180deg, rgba(51, 51, 51, 0.2) 0%, rgba(51, 51, 51, 0.2) 100%), url(${fakeImage});
  background-size: cover;
  repeat: no-repeat;
  height: 80%;
  border-radius-top: ${radius};
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  @media (max-width: ${mobileThresholdPixels}) {

  }
  :hover {
    background-image: url(${fakeImage});
  }
`;

const Footer = styled.div`
    align-self: center;
    margin: auto;
    border-radius-bottom: ${radius};
`;

const RoomCard = ({ title, label }) => (
  <Card>
    <Background>
      <Title1>
        {title}
      </Title1>
    </Background>
    <Footer>
      <Button label={label} />
    </Footer>
  </Card>
);

RoomCard.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
};

RoomCard.defaultProps = {
  title: '',
  label: '',
};

export default RoomCard;
