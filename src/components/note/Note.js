import React from 'react';
import {Container} from "./styles";
import moment from 'moment';
import edit_icon from '../../img/edit_icon.png';
import delete_icon from '../../img/delete_icon.png';

const Note = ({note, editNote, deleteNote}) => {
  return(
    <Container className='note'>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <div className='note_footer'>
        <span className="date">{moment(note.created_at).format('DD.MM.YYYY')}</span>
        <div>
          <img src={edit_icon} alt="" onClick={() => editNote(note.id)}/>
          <img src={delete_icon} alt="" onClick={() => deleteNote(note.id)}/>
        </div>
      </div>
    </Container>
  )
};

export default Note;