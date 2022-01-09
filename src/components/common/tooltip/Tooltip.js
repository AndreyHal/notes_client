import React from 'react';
import {Container} from "./styles";

const Tooltip = ({children, text, style, position = 'top', width = 250}) => {
  return(
    <Container position={position} width={width} style={style}>
      <div className="tooltip">{text}</div>
      {children}
    </Container>
  )
};

export default Tooltip;