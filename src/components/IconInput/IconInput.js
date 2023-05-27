import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const TextInput = styled.input`
  height: 1.5rem;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
  width: var(--width);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  margin: auto 0;
  height: ${props => props.size}px;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
    ...rest
}) => {
  return (
      <Wrapper>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper>
          <Icon id={icon} size={16}/>

        </IconWrapper>
        <TextInput {...rest} style={{'--width': width + 'px'}} />
      </Wrapper>
  )
};

export default IconInput;
