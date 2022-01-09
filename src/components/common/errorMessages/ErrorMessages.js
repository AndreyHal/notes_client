import React from 'react';
import {Container} from "./styles";
import close_round_icon from '../../../img/close_round_icon.png';

const ErrorMessages = ({errors, closeError}) => {
  return(
    <Container>
      {
        errors.map((item, index) => (
          <div className="error" key={index}>
            <div className="msg">
              <span>OOPS!</span>
              <span>{item.message}</span>
            </div>
            <img src={close_round_icon} alt="" onClick={closeError}/>
          </div>
        ))
      }
    </Container>
  )
};

export default ErrorMessages;