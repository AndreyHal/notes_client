import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import Wrapper from "../common/wrapper/Wrapper";
import {getNotes, createNewNote, saveEditedNote, deleteNoteById} from "../../api/api";
import {useWindowSize} from "../hooks/useWindowSize";
import Search from "../search/Search";
import Note from "../note/Note";
import Button from "../common/button/Button";
import NewNote from "../modals/NewNote";
import CloseModal from "../modals/CloseModal";
import add_icon from '../../img/add_icon.png';
import tile_icon from '../../img/tile_icon.png';
import list_icon from '../../img/list_icon.png';
import pagination_icon from '../../img/pagination_icon.png';
import Pagination from "../common/pagination/Pagination";
import Tooltip from "../common/tooltip/Tooltip";

const Main = () => {
  const [all_notes, setAllNotes] = useState([]);
  const [new_note, setNewNote] = useState(false);
  const [edit_note, setEditNote] = useState(null);
  const [search, setSearch] = useState('');
  const [close_modal, setCloseModal] = useState(false);
  const [pages_count, setPagesCount] = useState(0);
  const [current_page, setCurrentPage] = useState(1);
  const [view, setView] = useState('tile');
  const [pagination, setPagination] = useState(true);
  const [block_request, setBlockRequest] = useState(false);
  const [TAKE, setTake] = useState(9);
  const [columns, setColumns] = useState(4);
  const {width, height} = useWindowSize();
  // const TAKE = 9;

  const createNote = async (req) => {
    const {status} = await createNewNote(req);
    if(status === 200) {
      getAllNotes();
      setNewNote(false);
    }
  };

  const saveNote = async (req) => {
    const {status} = await saveEditedNote(req);
    if(status === 200) {
      getAllNotes();
      setEditNote(null);
    }
  };

  const editNote = (id) => {
    let note = all_notes.find(item => item.id === id);
    setEditNote(note);
  };

  const deleteNote = async (id) => {
    const {status} = await deleteNoteById(id);
    if(status === 200) {
      if(!pagination) {
        let new_list = all_notes.filter(item => item.id !== id);
        setAllNotes(new_list);
      } else {
        getAllNotes();
      }
    }
  };

  const closeNewNote = () => {
    setNewNote(false);
    setEditNote(null);
    setCloseModal(true);
  };

  const comeBack = () => {
    setCloseModal(false);
    let saved_note = JSON.parse(localStorage.getItem('note'));
    if(!!saved_note.id) {
      setEditNote(saved_note);
    } else {
      setNewNote(true);
    }
  };

  const closeModal = () => {
    localStorage.removeItem('note');
    setCloseModal(false);
    setEditNote(null);
  };

  const getAllNotes = async () => {
    if(block_request && !pagination) {
      return;
    }
    let req = {
      take: TAKE,
      skip: TAKE * (current_page-1),
      search: search.trim()
    };
    const {data} = await getNotes(req);
    if(!!data) {
      const notes_len = data.notes.length;
      const data_pages = data.pages;
      let list = [];
      if(pagination) {
        list = data.notes;
      } else {
        list = [...all_notes, ...data.notes];
      }
      setAllNotes(list);
      setPagesCount(data_pages);
      if(!list.length && !!data_pages) {
        setCurrentPage(data_pages);
      }
      if(notes_len < TAKE) {
        return;
      }
      setBlockRequest(false);
    }
  };

  const scroll = () => {
    if(pagination || block_request) {
      return;
    }
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.scrollY + window.innerHeight;
    const bottom = 300;
    if(scrollHeight - scrollY < bottom) {
      setCurrentPage(current_page+1);
      setBlockRequest(true);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, [current_page, search, TAKE]);

  useEffect(() => {
    document.addEventListener('scroll', scroll);
    if(pagination) {
      getAllNotes();
    }
    return () => document.removeEventListener('scroll', scroll);
  }, [pagination, block_request]);

  useEffect(() => {
    if(width <= 600) {
      setTake(6);
      setColumns(2);
    } else if(width <= 1400) {
      setTake(9);
      setColumns(3);
    } else if(width > 1400) {
      setTake(12);
      setColumns(4);
    }
  }, [width]);

  return(
    <Wrapper>
      {
        close_modal && <CloseModal comeBack={comeBack} close={closeModal}/>
      }
      {
        (new_note || !!edit_note) && <NewNote note={edit_note} close={closeNewNote} create={createNote} saveEdits={saveNote}/>
      }
      <Container>
        <h1 className='title'>Мои заметки</h1>
        <div className="search">
          <Search setSearch={setSearch}
                  search={search}
          />
          <Button action={() => setNewNote(true)}>
            <img src={add_icon} alt=""/>
            <span>Создать</span>
          </Button>
        </div>
        <div className="view">
          <Tooltip text='Включить отображение страниц. Если выключено - работает ленивая подгрузка.'>
            <div className={`pagination_icon ${pagination ? 'active' : ''}`} onClick={() => setPagination(state => !state)}>
              <img src={pagination_icon} alt=""/>
            </div>
          </Tooltip>
          <Tooltip text='Переключить вид на плитку.'>
            <div className={`view_item ${view === 'tile' ? 'active' : ''}`} onClick={() => setView('tile')}>
              <img src={tile_icon} alt=""/>
            </div>
          </Tooltip>
          <Tooltip text='Переключить вид на список.'>
            <div className={`view_item ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')}>
              <img src={list_icon} alt=""/>
            </div>
          </Tooltip>
        </div>
        {
          view === 'tile' ?
            <div className="tiles">
              {
                [...Array(columns)].map((col, col_index) => ( // columns: int
                  <div className={`col-${col_index}`} key={col_index}>
                    {
                      all_notes.map((item, index) => {
                        if(index % columns === col_index) { // условие для "мозаичной" верстки
                          return(
                            <Note note={item}
                                  key={index}
                                  editNote={editNote}
                                  deleteNote={deleteNote}
                            />
                          )
                        }
                      })
                    }
                  </div>
                ))
              }
            </div> : null
        }
        {
          view === 'list' ?
            <div className="list">
              {
                all_notes.map((item, index) => (
                  <Note note={item}
                        key={index}
                        editNote={editNote}
                        deleteNote={deleteNote}
                  />
                ))
              }
            </div> : null
        }
        {
          (pagination && !!all_notes.length) && <Pagination current_page={current_page}
                                                        setCurrentPage={(page) => setCurrentPage(page)}
                                                        pages_count={pages_count}
                                            />
        }
      </Container>
    </Wrapper>
  )
};

export default Main;