/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputContainer } from './Input';

const TextareaContainer = styled(InputContainer)`
  &.merlin-input {
    .input {
      height: 20vh;
    }
  } 
`;

const Textarea = ({
  half,
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <TextareaContainer className="merlin-input" half={half}>
    <textarea
      label={label}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      className={value ? 'input has-content' : 'input'}
    />
    <label
      htmlFor={id}
      className="label"
    >
      {label}
    </label>
  </TextareaContainer>
);

Textarea.propTypes = {
  half: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  half: false,
  id: '',
  label: '',
  type: '',
  value: '',
  onChange() { },
};

export default Textarea;
