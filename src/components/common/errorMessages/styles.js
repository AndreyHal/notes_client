import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 2;
  .error {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    grid-gap: 50px;
    padding: 15px 20px;
    margin-top: 10px;
    border-radius: 5px;
    background: #ffbfbf;
    .msg {
      span:nth-child(1) {
        margin-right: 10px;
        font-weight: bold;
        font-size: 20px;
        color: #c00000;
      }
    }
    img {
      width: 30px;
      cursor: pointer;
    }
  }
`;

export {Container};