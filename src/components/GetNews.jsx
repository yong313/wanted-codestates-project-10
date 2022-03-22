import React from "react";
import styled from "styled-components";
import { ReactComponent as SendImg } from "../assets/send_img.svg";

const GetNews = () => {
  return (
    <>
      <GetNewsBox>
        <Container>
          <LeftBox>
            <h1>새로운 임상시험이 등록되면 문자로 알려드려요</h1>
            <SendBtn>임상시험 소식받기</SendBtn>
          </LeftBox>
          <RightBox>
            <SendImg />
          </RightBox>
        </Container>
      </GetNewsBox>
    </>
  );
};

const GetNewsBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #3d9efc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 660px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const LeftBox = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 0 20px 0;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
`;

const SendBtn = styled.button`
  width: 167px;
  height: 46px;
  color: #368cec;
  font-size: 15.5px;
  margin-top: 22px;
  border-radius: 50px;
  background-color: #fff;
`;

const RightBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 0;
  bottom: -10px;
`;

export default GetNews;
