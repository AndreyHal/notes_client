import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  input {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    width: calc(100% - 130px);
    font-size: 16px;
    outline: none;
    border: none;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    &.search_icon {
      left: 25px;
    }
    &.filter_icon {
      right: 50px;
    }
    &.sort_icon {
      right: 25px;
    }
  }
`;

export {Container};