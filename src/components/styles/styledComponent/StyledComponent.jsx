import React from 'react';
import styled from 'styled-components';

const MyComponent = styled.div`
  background-color: ${props => props.backroundColor ? props.backroundColor : 'blue'};
  font-size: 24px;
`

const ExtendedComponent = styled(MyComponent)`
  text-decoration: underline;
`

const StyledComponent = ({backroundColor}) => {
    return <>
        <MyComponent backroundColor={backroundColor}>Styled component</MyComponent>
        <ExtendedComponent>extended component</ExtendedComponent>
    </>
}

export default StyledComponent;