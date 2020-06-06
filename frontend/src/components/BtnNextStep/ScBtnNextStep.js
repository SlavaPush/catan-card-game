import styled from "styled-components";
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-color: ${(props) => props.isActiveStep
    ? 'green'
    : 'grey'};;
  width: 215px;
  height: 50px;
  border-radius: 4px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
  transition: .2s;
  &:hover {
    ${(props) => props.isActiveStep && `box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);`} // <Thing> when hovered
  }
  &:active {
    ${(props) => props.isActiveStep && `box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.75);`} 
  }
`;
export const Img = styled.img`
  margin-left: 7px;
  height: 20px;
`;
export const Spinner = styled.img`
  height: 45px;
  width: 40px;
`;
export const TextDiv = styled.div`
  display: flex;
  align-items: center;
`;
