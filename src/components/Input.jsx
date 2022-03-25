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
  // 키보드로 검색어 이동 상태관리
  const [targetIndex, setTargetIndex] = useState(-1);
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

  const buttonClickHandler = () => {
    if (userValue === "") {
      return window.alert("검색어를 입력해 주세요.");
    }
    window.location.href = `https://clinicaltrialskorea.com/studies?condition=${userValue}`;
  };

  const onKeyUpHandler = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (targetIndex < 0) {
          return;
        } else {
          setTargetIndex(targetIndex - 1);
        }
        break;
      case "ArrowDown":
        if (targetIndex >= 7) {
          return;
        }
        setTargetIndex(targetIndex + 1);
        break;
      case "Escape":
        if (e.keyCode === 27) {
          setIsUserValue("");
        }
        break;
      case "Enter":
        if (e.key === "Enter" && targetIndex > -1) {
          buttonClickHandler();
        }
        break;
      default:
        break;
    }
  };

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
              onKeyUp={onKeyUpHandler}
            />
          </TextBox>
        </LeftBox>
        <RightBox onClick={buttonClickHandler}>검색</RightBox>
        <MobileRightBox onClick={buttonClickHandler}>
          <SearchIcon />
        </MobileRightBox>
      </InputBox>

      {isLoading ? (
        searchResult ? (
          <AutoComplete
            userValue={userValue}
            data={data}
            targetIndex={targetIndex}
            buttonClickHandler={buttonClickHandler}
          />
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

  @media screen and (max-width: 1040px) {
    width: 100%;
    height: 46.4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
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

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

const TextBox = styled.div`
  width: 90%;
  height: 100%;

  @media screen and (max-width: 1040px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;

  ::placeholder {
    color: #aebbc5;
  }
  @media screen and (max-width: 1040px) {
    font-size: 14px;
  }
`;

const RightBox = styled.button`
  width: 15%;
  height: 100%;
  background-color: #327be9;
  color: #fff;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

const MobileRightBox = styled.button`
  display: none;
  width: 15%;
  height: 100%;
  background-color: #fff;
  text-align: right;
  padding-right: 20px;

  @media screen and (max-width: 1040px) {
    display: block;
  }
`;

export default Input;
