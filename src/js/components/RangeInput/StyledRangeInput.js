import styled, { css } from 'styled-components';

import { focusStyle, parseMetricToNum } from '../../utils';

const rangeTrackStyle = css`
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.theme.global.focus.border.width};
  background: ${
    props => (
      props.theme.dark ? (
        props.theme.global.colors.white
      ) : (
        props.theme.rangeInput.track.color
      )
    )
  };
`;

const rangeThumbStyle = css`
  box-sizing: border-box;
  position: relative;
  border: ${props => props.theme.global.control.border.width} solid ${props => (props.theme.dark ? props.theme.global.colors.white : props.theme.global.colors.brand)};
  border-radius: ${props => props.theme.global.spacing};
  height: ${props => props.theme.global.spacing};
  width: ${props => props.theme.global.spacing};
  overflow: visible;
  background: ${props => (props.theme.dark ? props.theme.global.colors.black : props.theme.global.colors.white)};
  -webkit-appearance: none;
  cursor: pointer;
`;

const firefoxMicrosoftThumbStyle = css`
  ${rangeThumbStyle}
  margin-top: 0px;
  height: ${props => parseMetricToNum(props.theme.global.spacing) - (parseMetricToNum(props.theme.global.control.border.width) * 2)}px;
  width: ${props => parseMetricToNum(props.theme.global.spacing) - (parseMetricToNum(props.theme.global.control.border.width) * 2)}px;
`;

const StyledRangeInput = styled.input`
  box-sizing: border-box;
  position: relative;
  -webkit-appearance: none;
  border-color: transparent;
  height: ${props => props.theme.global.spacing};
  width: 100%;
  padding: 0px;
  cursor: pointer;
  overflow-x: hidden;
  background: transparent;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: none;
  }

  &::-moz-focus-outer {
    border: none;
  }

  &::-webkit-slider-runnable-track {
    ${rangeTrackStyle}
  }

  &::-webkit-slider-thumb {
    ${rangeThumbStyle}

    margin-top: -${props => Math.round(parseMetricToNum(props.theme.global.spacing) * 0.45)}px;

    ${props => !props.disabled && css`
      &:hover {
        border-color: ${props.theme.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor};
      }
    `}
  }

  &::-moz-range-track {
    ${rangeTrackStyle}
  }

  &::-moz-range-thumb {
    ${firefoxMicrosoftThumbStyle}
  }

  &::-ms-thumb {
    ${firefoxMicrosoftThumbStyle}
  }

  ${props => !props.disabled && css`
    &:hover::-moz-range-thumb {
      border-color: ${props.theme.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor};
    }

    &:hover::-ms-thumb {
      border-color: ${props.theme.dark ? props.theme.global.colors.white : props.theme.global.hover.textColor};
    }
  `}

  &::-ms-track {
    ${rangeTrackStyle}
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: ${props => (props.theme.dark ? props.theme.global.colors.white : props.theme.rangeInput.track.color)};
    border-color: transparent;
  }

  &::-ms-fill-upper {
    background: ${props => (props.theme.dark ? props.theme.global.colors.white : props.theme.rangeInput.track.color)};
    border-color: transparent;
  }

  ${props => props.focus && focusStyle}
`;

export default StyledRangeInput.extend`
  ${props => props.theme.rangeInput && props.theme.rangeInput.extend}
`;
