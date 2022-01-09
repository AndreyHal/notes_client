import React, {useState, useEffect} from 'react';
import {NewNoteCont} from "./styles";
import Button from "../common/button/Button";
import close_icon from '../../img/close_icon.png';
import {clearErrors} from "../common/functions/functions";

const NewNote = ({close, create, saveEdits, note=null}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const save = () => {
    if(!title || !body) {
      // return;
    }
    let req = {
      title,
      body
    };
    if(!!note) {
      saveEdits({id: note.id, ...req});
    } else {
      create(req);
    }
  };

  const closeThisModal = () => {
    let save_note = {
      title,
      body
    }
    if(!!note) {
      save_note.id = note.id;
    }
    localStorage.setItem('note', JSON.stringify(save_note));
    close();
    clearErrors();
  };

  useEffect(() => {
    if(!!note) {
      setTitle(note.title);
      setBody(note.body);
    } else {
      let saved_note = JSON.parse(localStorage.getItem('note'));
      if(!!saved_note) {
        setTitle(saved_note.title);
        setBody(saved_note.body);
      }
    }
    localStorage.removeItem('note');
  }, []);

  return(
    <NewNoteCont>
      <div className="modal">
        <div className="modal_title">
          <h2>{!!note ? 'Редактировать заметку' : 'Создать заметку'}</h2>
          <img src={close_icon} alt="" onClick={closeThisModal}/>
        </div>
        <input type="text"
               className='title_note'
               placeholder='Заголовок'
               value={title}
               onChange={e => setTitle(e.target.value)}
        />
        <textarea rows="15"
                  className='body_note'
                  placeholder='Введите Ваш текст'
                  value={body}
                  onChange={e => setBody(e.target.value)}
        />
        <Button style={{width: 'max-content'}} action={save}>{!!note ? 'Сохранить' : 'Создать'}</Button>
      </div>
    </NewNoteCont>
  )
};

export default NewNote;