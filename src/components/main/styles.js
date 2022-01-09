import styled from "styled-components";

const Container = styled.div`
  width: 85vw;
  min-width: 935px;
  padding: 130px 5px;
  margin: 0 auto;
  h1.title {
    font-size: 36px;
    font-weight: 400;
    margin: 0 0 50px 0;
  }
  .search {
    position: sticky;
    top: 20px;
    display: grid;
    grid-template-columns: auto 180px;
    grid-gap: var(--margin);
    margin-bottom: 20px;
    z-index: 1;
  }
  .view {
    position: sticky;
    top: 90px;
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-gap: 20px;
    justify-content: right;
    margin-bottom: 20px;
    z-index: 1;
    .view_item, .pagination_icon {
      box-sizing: border-box;
      box-shadow: var(--shadow);
      text-align: center;
      padding: 8px 0 5px;
      border-radius: 5px;
      cursor: pointer;
      background: #fff;
      &.active {
        border: 2px solid var(--pink);
      }
      img {
        width: 60%;
      }
      &.pagination_icon {
        padding: 5px 0 0;
        img {
          width: 80%;
        }
      }
    }
  }
  .tiles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0 var(--margin);
  }
  .list {
    .note {
      padding: 20px;
      margin-bottom: 20px;
      .note_footer {
        margin-top: 30px;
      }
    }
  }
  @media(max-width: 1400px) {
    .tiles {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media(max-width: 1000px) {
    width: 94vw;
    min-width: auto;
  }
  @media(max-width: 700px) {
    .search {
      grid-gap: 20px;
    }
    .tiles {
      grid-gap: 0 20px;
      .note {
        margin-bottom: 20px;
      }
    }
  }
  @media(max-width: 600px) {
    .tiles {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export {Container};