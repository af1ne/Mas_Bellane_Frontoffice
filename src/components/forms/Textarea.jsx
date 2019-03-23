import React from 'react';
import styled from "styled-components";
import { InputContainer } from './Input';

const TextareaContainer = styled(InputContainer)`
  &.merlin-input {
    .input {
      height: 20vh;
    }
  } 
`;

const Textarea = ({ half, id, label, type, value, onChange }) => {
  return (
    <TextareaContainer className='merlin-input' half={half}>
      <textarea
        label={label}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        className={value ? "input has-content" : "input"}
      />
      <label className='label' htmlFor={id} autoFocus>
        {label}
      </label>
    </TextareaContainer>
  );
};

export default Textarea;