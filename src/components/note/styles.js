import styled from "styled-components";

const Container = styled.div`
  //max-width: calc((100vw - 140px * 2) / 3 - 67px);
  padding: 40px 20px 30px;
  background: #FFFFFF;
  box-shadow: var(--shadow);
  border-radius: 5px;
  margin-bottom: 40px;
  h2 {
    font-size: 22px;
    margin: 0 0 25px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  .note_footer {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    opacity: 0.7;
    margin-top: 50px;
    .date {
      color: var(--pink);
      font-size: 14px;
    }
    img {
      margin-left: 13px;
      cursor: pointer;
    }
  }
`;

export {Container};