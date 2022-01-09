import React, {useState, useEffect} from 'react';
import {Container} from "./styles";

const Pagination = ({pages_count, current_page, setCurrentPage}) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let pages_list = [];
    if(pages_count <= 6) {
      for(let i = 0; i < pages_count; i++) {
        pages_list.push(i+1);
      }
    } else if(pages_count > 6) {
      if(current_page <= 3) {
        pages_list = [1, 2, 3, 4, '...', pages_count];
      } else if(current_page >= pages_count-2) {
        pages_list = [1, '...', pages_count-3, pages_count-2, pages_count-1, pages_count];
      } else if(current_page > 3 && current_page < pages_count-2) {
        pages_list = [1, '...', current_page-1, current_page, current_page+1, '...', pages_count];
      }
    }
    setPages(pages_list);
  }, [pages_count, current_page]);

  return(
    <Container columns={pages.length+2}>
      <div className="prev_arrow" onClick={() => current_page > 1 ? setCurrentPage(current_page-1) : null}/>
      {
        pages.map((item, index) => (
          <div key={index}
               className={`page ${item === current_page ? 'active' : ''}`}
               onClick={() => item !== '...' ? setCurrentPage(item) : null}
          >{item}</div>
        ))
      }
      <div className="next_arrow" onClick={() => current_page < pages_count ? setCurrentPage(current_page+1) : null}/>
    </Container>
  )
};

export default Pagination;