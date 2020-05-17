import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function PriceDevelopmentBoard() {
  const PriceBoard = styled.div`
    margin: 0 ;
    background-color: green;
    padding: 10px 15px 10px 7px;
    width: 300px;
    border-radius: 4px;
    color: white;
    text-align: left;
    vertical-align: middle;
    font-size: 15px;
  `;
  const Point = styled.span`
    color: gold;
  `;
  const Margin = styled.div`
  margin: auto 2rem;
`;

  const price = useSelector(
    (state) => state.template.priceDevelopmentCards
  );

  return (
    <>
      <PriceBoard>
        {price.map((el) => {
          return (
            <Margin>
            <span>
              {el.name} = {el.coast}{" "}
              {el.point ?  (<><Point>{'(' + el.point + ')'}</Point> <br /></>) :  <br />}
            </span>  
            </Margin>
          );
        })}
      </PriceBoard>
    </>
  );
}
