import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getData, change } from "../redux/search";
import { debounce } from "lodash";

import AutoComplete from "./AutoComplete";
import NoSearch from "./NoSearch";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";

const Input = () => {
  const dispatch = useDispatch();
  // 검색결과를 useSelector를 사용하여 가져오고 data에 담음
  const data = useSelector((store) => store.data.data);
  // 검색 중 컴포넌트 불린 값을 useSelector를 사용하여 가져오고 isLoading에 담음
  const isLoading = useSelector((store) => store.data.loading);
  // 유저가 검색한 검색어 상태관리
  const [userValue, setIsUserValue] = useState("");
  // 인풋에 벨류값이 있는지 없지 체크
  const [isValue, setIsValue] = useState(false);
  // ref를 사용하여 input에 작성된 텍스트를 가져옴
  const userSearchInput = useRef("");
  // data의 배열의 length값이 0과 같은지 비교하여 삼항연산자를 사용 컴포넌트 상태 관리
  let searchResult = data?.length === 0 ? false : true;
  // setTimeout 전역 변수 선언
  let timeOut;
  // 유저가 입력한 검색어 핸들링 함수
  const userInputHandler = () => {
    setIsValue(true);
    timeOut = setTimeout(() => {
      setIsUserValue(userSearchInput.current.value);
    }, 450);
  };

  const debouceOn = debounce(userInputHandler, 250);

  useEffect(() => {
    if (userValue === "") {
      return (
        console.log("디스패치 체인지 시작!"),
        setIsValue(false),
        dispatch(change(false))
      );
    }
    dispatch(getData(userValue));
    clearTimeout(timeOut);
  }, [dispatch, timeOut, userValue]);

  return (
    <>
      <InputBox>
        <LeftBox>
          <IconBox>
            <SearchIcon className="search_icon" />
          </IconBox>
          <TextBox>
            <SearchInput
              placeholder="질환명을 입력해 주세요."
              type="text"
              ref={userSearchInput}
              onChange={debouceOn}
            />
          </TextBox>
        </LeftBox>
        <RightBox>검색</RightBox>
      </InputBox>

      {isLoading ? (
        searchResult ? (
          <AutoComplete userValue={userValue} data={data} />
        ) : (
          <NoSearch />
        )
      ) : (
        isValue && <NoSearch searching />
      )}
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
    color: #505b65;
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
