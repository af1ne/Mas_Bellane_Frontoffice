import React, { Component } from 'react';
import axios from 'axios';
import { Container, TitleSection, BackgroundSection, Text } from '../StyledComponents';
import Underline from '../commun/Underline';
import Button from '../commun/Button';
import food from '../../assets/images/food-min.png';

class HostTable extends Component {
  state = {
    dataHostTable: {},
  }
  componentDidMount() {
    this.getDataHostTable();
  }
  getDataHostTable = async event => {
    const response = await axios.get(`/sections`);
    this.setState({ dataHostTable: response.data[4] });
  }

  render() {
    const { dataHostTable } = this.state;
    return (
      <BackgroundSection image={food}>
        <Container white>
          <TitleSection>{dataHostTable.title}</TitleSection>
          <Underline white />
          <Text>{dataHostTable.content}</Text>
          <Button
            label={dataHostTable.textButton}
            darkGreen
            marginTopAndBottom
          />
        </Container>
      </BackgroundSection>
    );
  }
}

export default HostTable;