/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  height: ${props => props.size};
  border-radius: 8px;
  padding: ${props => props.size === '24px' ? '4px' : '0px'};
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value + '%'};
  height: 100%;
  border-radius: ${props => props.value >= 99 ? '4px' : '4px 0px 0px 4px'}; 
`

const ProgressBar = ({ value, size }) => {
  const sizes = {small: '8px', medium: '12px', large: '24px'}

  return (
      <Wrapper size={sizes[size] ?? 'medium'}
           role="progressbar"
           aria-valuenow={value}
           aria-valuemin={0}
           aria-valuemax={100}>
        <Progress value={value}/>
      </Wrapper>);
};

export default ProgressBar;
