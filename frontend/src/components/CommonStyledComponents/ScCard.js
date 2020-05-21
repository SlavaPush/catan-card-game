import styled, { css } from 'styled-components';

export const Card = styled.div`
    border-radius: 12px;
    width: 125px;
    height: 204px;
    color: black;
    transition: 0.2s;
    filter: ${(props) => props.allActive
    ? 'grayscale(0%)'
    : 'grayscale(0%)'};
    ${(props) => props.allActive && css`box-shadow: 0px 0px 4px 5px #9B963E`};
    ${(props) => props.selected && css`box-shadow: 0px 0px 10px 7px #9B963E`};
    &:hover {
      ${(props) => props.allActive && `box-shadow: 0px 0px 10px 7px #9B963E`}
    };
  `;

