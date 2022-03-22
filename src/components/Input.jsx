import React from "react";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

const Input = () => {
  return (
    <>
      <InputBox>
        <LeftBox>
          <IconBox>
            <SearchIcon className="search_icon" />
          </IconBox>
          <TextBox>
            <SearchInput placeholder="질환명을 입력해 주세요." />
          </TextBox>
        </LeftBox>
        <RightBox>검색</RightBox>
      </InputBox>
    </>
  );
};

const InputBox = styled.div`
  width: 660px;
  height: 65px;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
`;

const LeftBox = styled.div`
  width: 91%;
  height: 100%;
  display: flex;
  background-color: #fff;
`;

const IconBox = styled.div`
  width: 9%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .search_icon {
    margin-left: 11px;
  }
`;

const TextBox = styled.div`
  width: 90%;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;

  ::placeholder {
    color: #aebbc5;
  }
`;

const RightBox = styled.button`
  width: 15%;
  height: 100%;
  background: #327be9;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export default Input;
