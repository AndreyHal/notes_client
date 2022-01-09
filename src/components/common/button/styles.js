import styled from "styled-components";

const Container = styled.div`
  background: var(--pink);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 12px 34px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 18px;
  box-sizing: border-box;
  border: 2px solid var(--pink);
  cursor: pointer;
  &.white {
    background: #fff;
    color: var(--pink);
  }
  &.small {
    font-size: 14px;
  }
  img {
    margin-bottom: -1px;
  }
  span {
    margin-left: 8px;
    letter-spacing: var(--spacing);
  }
`;

export {Container};