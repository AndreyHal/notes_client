import axios from "axios";
import {API_URL} from "../config";
import {list_errors_from_backend} from "./errorsList";
import {createErrorEvent} from "../components/common/functions/functions";

const identifyErrors = (error) => {
  let errors_list = [];
  if(error.response?.data?.detail?.errorsList?.length) {
    error.response.data.detail.errorsList.forEach(item => {
      errors_list.push({
        message: list_errors_from_backend[item]
      });
    });
    createErrorEvent(errors_list);
  } else {
    createErrorEvent([{
      message: 'Что-то пошло не так.'
    }]);
  }
};

const request = async (method, url, req, success = null, fail = null) => {
  let data = null;
  await axios[method](API_URL + url, req).then(res => {
    if(success !== null) {
      success(res.data);
    } else {
      data = res.data;
    }
  }).catch(error => {
    if(fail !== null) {
      fail(error)
    } else {
      identifyErrors(error);
    }
  });
  return {data};
};

const getNotes = async (req) => {
  return await request('post', '/get-notes', req);
};

const createNewNote = async (req) => {
  let status = 400
  await request('post', '/create-note', req, () => {
    status = 200
  })
  return {status}
};

const saveEditedNote = async (req) => {
  let status = 400
  await request('post', '/edit-note', req, () => {
    status = 200
  })
  return {status}
};

const deleteNoteById = async (id) => {
  let status = 400
  await request('delete', `/delete-note?id=${id}`, {}, () => {
    status = 200
  })
  return {status}
};

export {
  getNotes,
  createNewNote,
  saveEditedNote,
  deleteNoteById
};