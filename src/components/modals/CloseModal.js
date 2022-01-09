import React from 'react';
import {CloseModalCont} from "./styles";
import Button from "../common/button/Button";

const CloseModal = ({close, comeBack}) => {
  return(
    <CloseModalCont>
      <div className="modal">
        <div className="modal_body">
          <p>Вы уверены, что хотите закрыть окно? <br/>В этом случае, изменения не сохранятся</p>
        </div>
        <div className="modal_footer">
          <Button className='small' action={comeBack}>Вернуться</Button>
          <Button className='small white' action={close}>Закрыть</Button>
        </div>
      </div>
    </CloseModalCont>
  )
};

export default CloseModal;