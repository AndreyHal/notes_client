import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: #0004;
  z-index: 2;
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    border-radius: 5px;
    padding: var(--margin);
  }
`;

const NewNoteCont = styled(Wrapper)`
  .modal {
    .modal_title {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      margin-bottom: var(--margin);
      h2 {
        font-size: 36px;
        font-weight: 500;
        letter-spacing: var(--spacing);
        margin: 0;
      }
      img {
        cursor: pointer;
      }
    }
    .title_note, .body_note {
      display: block;
      outline: none;
      width: 100%;
      border: none;
      margin-bottom: 20px;
      padding: 20px;
      background: #FFFFFF;
      box-shadow: var(--shadow);
      border-radius: 5px;
      font-size: 22px;
      letter-spacing: var(--spacing);
      resize: none;
      box-sizing: border-box;
      &::placeholder {
        color: #D8D8D8;
      }
    }
  }
`;

const CloseModalCont = styled(Wrapper)`
  .modal {
    width: 30%;
    .modal_body {
      margin-bottom: 30px;
      p {
        font-size: 18px;
        text-align: center;
        margin: 0;
      }
    }
    .modal_footer {
      display: grid;
      grid-template-columns: 150px 150px;
      grid-gap: 20px;
      justify-content: center;
    }
  }
`;

export {NewNoteCont, CloseModalCont};