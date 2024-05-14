import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import {S} from './Slyder_Styles'

export const Slider = () => {
  return (
    <S.Slider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          </S.Text>
          <S.Name>@Leunets D.</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span> </span>
        <span className={"active"}> </span>
        <span> </span>
      </S.Pagination>
    </S.Slider>
  );
};

