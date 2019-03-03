import React, { Component } from 'react';
// import styled from 'styled-components';
import { SectionContainer, Row, Col, TitleSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';

class Place extends Component {
  render() {
    return (
      <SectionContainer id='place'>
        <Row>
          <Col>
            <TitleSection>
              Un lieu de quiétude
            </TitleSection>
            <Underline />
            <Text>
              Niché au pied la la montagne, le Mas Bellane est un ancien corp de ferme......Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei. No deserunt mediocritatem mel. Lorem ipsum dolor sit amet
            </Text>
          </Col>
        </Row>
      </SectionContainer>
    );
  }
}

export default Place;
