import React, {useState, useEffect} from 'react';
import {Container} from "./styles";
import ErrorMessages from "../errorMessages/ErrorMessages";

// в эту компоненту оборачиваю страницы приложения, чаще на странице есть хедер и
// футер, они будут подключаться тут чтобы не дублировать на каждой странице код
const Wrapper = ({children}) => {
  const [errors, setErrors] = useState([]);

  const showError = (e) => {
    setErrors(e.detail.errors);
  };

  const clearError = () => {
    setErrors([]);
  };

  const closeError = (index) => {
    let arr = [...errors];
    arr.splice(index, 1);
    setErrors(arr);
  };

  useEffect(() => {
    document.addEventListener('show_error', showError);
    return () => document.removeEventListener('show_error', showError);
  }, []);

  useEffect(() => {
    document.addEventListener('clear_error', clearError);
    return () => document.removeEventListener('clear_error', clearError);
  }, [])

  return(
    <Container className='wrapper'>
      {children}
      <ErrorMessages errors={errors} closeError={closeError}/>
    </Container>
  )
};

export default Wrapper;