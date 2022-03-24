import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import search, { getData } from "../redux/search";

import AutoComplete from "./AutoComplete";
import NoSearch from "./NoSearch";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

const Input = () => {
  const [userValue, setIsUserValue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);
  let searchResult = data?.data.length === 0 ? false : true;

  useEffect(() => {
    if (userValue === "") {
      return;
    }
    dispatch(getData(userValue));
  }, [dispatch, userValue]);

  return (
    <>
      <InputBox>
        <LeftBox>
          <IconBox>
            <SearchIcon className="search_icon" />
          </IconBox>
          <TextBox>
            <SearchInput
              type="search"
              value={userValue}
              onChange={(e) => setIsUserValue(e.target.value)}
              placeholder="질환명을 입력해 주세요."
            />
          </TextBox>
        </LeftBox>
        <RightBox>검색</RightBox>
      </InputBox>
      {userValue && searchResult && (
        <AutoComplete userValue={userValue} data={data} />
      )}
      {userValue && !searchResult && <NoSearch />}
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
