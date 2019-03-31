/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, mobileThresholdPixels } from '../StyledComponents';

export const InputContainer = styled.div`
  &.merlin-input {
    width: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: left;
    margin: 0.25rem;
    background-color: none;

    @media (max-width: ${mobileThresholdPixels}) {
      width: 65vw;
    }

    .input,
    .label {
      transition: all 0.16s ease-out;
      font-family: sans-serif;
      font-weight: 300;
      font-size: 1em;
      background-color: ${colors.whiteTransparent};
    }

    .input {
      width: 100%;
      border: 1px #ddd solid;
      border-radius: 0.2em;
      padding-top: 1.15em;
      padding-left: 0.62em;
      height: 4.5vh;
    }

    .label {
      pointer-events: none;
      position: absolute;
      color: ${colors.white};
      left: 0;
      transform: translate(0.8em, 1em);
      transform-origin: left;
      background-color: inherit;
    }

    .input.has-content + .label {
      color: ${colors.white};
    }

    .input.has-content,
    .input:focus {
      & + label {
        transform: translate(0.7em, 0.3em) scale(0.8);
      }
    }

    .input:focus {
      border-color: ${colors.lightGreen};
      outline: none;

      & + .label {
        color: ${colors.white};
      }
    }
  }
`;

const Input = ({
  half,
  id,
  label,
  type,
  value,
  onChange,
}) => (
  <InputContainer className="merlin-input" half={half}>
    <input
      label={label}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
      className={value ? 'input has-content' : 'input'}
    />
    <label
      className="label"
      htmlFor={id}
    >
      {label}
    </label>
  </InputContainer>
);

Input.propTypes = {
  half: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  half: false,
  id: '',
  label: '',
  type: '',
  value: '',
  onChange() {},
};

export default Input;
