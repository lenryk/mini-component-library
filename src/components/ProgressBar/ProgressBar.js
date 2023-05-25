/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  height: ${props => props.size === 'large' ? '24px' : props.size === 'medium' ? '12px' : '8px'};
  border-radius: 8px;
  padding: ${props => props.size === 'large' ? '4px' : '0px'};
`

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value + '%'};
  height: 100%;
  border-radius: ${props => props.value >= 99 ? '4px' : '4px 0px 0px 4px'}; 
`

const ProgressBar = ({ value, size }) => {
  return (
      <Wrapper size={size}>
        <Progress value={value}/>
      </Wrapper>);
};

export default ProgressBar;
