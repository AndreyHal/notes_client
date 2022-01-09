import React from 'react';
import {Container} from "./styles";

const Button = ({action, className, style, ...props}) => {
  return(
    <Container style={style} className={className} onClick={action}>
        {props.children}
    </Container>
  )
};

export default Button;