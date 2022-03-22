import React from "react";
import styled from "styled-components";

const AutoComplete = () => {
  return (
    <>
      <AutoCompleteBox></AutoCompleteBox>
    </>
  );
};

const AutoCompleteBox = styled.div`
  width: 660px;
  height: auto;
  min-height: 50px;
  border-radius: 30px;
  background-color: #fff;
  position: absolute;
  top: 46%;
  z-index: 9;
`;

export default AutoComplete;
