import styled from "styled-components";

const Container = styled.div`
  position: relative;
  &:hover {
    .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }
  .tooltip {
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    position: absolute;
    left: 50%;
    ${props => props.position === 'top' ?
            'bottom: calc(100% + 20px);'
            :
            'top: calc(100% + 20px);'
    }
    width: ${props => props.width}px;
    text-align: center;
    padding: 15px 10px;
    transform: translateX(-50%);
    box-sizing: border-box;
    box-shadow: var(--shadow);
    border-radius: 5px;
    background: #fff;
    z-index: 1;
    &:before, &:after {
      position: absolute;
      content: '';
      left: 50%;
      ${props => props.position === 'top' ?
              'bottom: 0;' +
              'transform: translate(-50%, 50%) rotateZ(45deg);'
              :
              'top: 0;' +
              'transform: translate(-50%, -50%) rotateZ(45deg);'
      }
      width: 15px;
      height: 15px;
      box-shadow: var(--shadow);
      border-radius: 5px;
      background: #fff;
    }
    &:after {
      box-shadow: none;
      transform: translateX(-50%);
    }
  }
`;

export {Container};