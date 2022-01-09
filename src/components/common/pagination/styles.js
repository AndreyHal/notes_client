import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 40px);
  grid-gap: 10px;
  justify-content: right;
  user-select: none;
  & > div {
    height: 40px;
    border: 2px solid var(--pink);
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    background: #fff;
    box-sizing: border-box;
    padding-top: 9px;
    &.active {
      background: var(--pink);
      color: #fff;
    }
    &.prev_arrow, &.next_arrow {
      position: relative;
      &:after {
        position: absolute;
        content: '';
        left: 50%;
        top: 50%;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
      }
    }
    &.prev_arrow:after {
      transform: translate(-30%, -50%) rotateZ(135deg);
    }
    &.next_arrow:after {
      transform: translate(-70%, -50%) rotateZ(-45deg);
    }
  }
`;

export {Container};