import React from "react";
import styled from "styled-components";
import { ReactComponent as SendImg } from "../assets/send_img.svg";
import { ReactComponent as MbSendImg } from "../assets/mb_send_img.svg";
const GetNews = () => {
  return (
    <>
      <GetNewsBox>
        <Container>
          <LeftBox>
            <h1>새로운 임상시험이 등록되면 문자로 알려드려요</h1>
            <p>
              새로운 임상시험이 등록되면
              <br />
              <span>문자로 알려드려요.</span>
            </p>
            <SendBtn>임상시험 소식받기</SendBtn>
          </LeftBox>
          <RightBox>
            <SendImg id="desktop_img" />
            <MbSendImg id="mbile_img" />
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

  @media screen and (max-width: 1040px) {
    background-color: #cae9ff;
  }
`;

const Container = styled.div`
  width: 660px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1040px) {
    width: 87%;
    border-radius: 16px;
    background-color: #ffffff;
    padding: 10px 16px;
    margin-bottom: 1.5rem;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
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
  p {
    display: none;
    font-size: 14px;
    line-height: 22px;
    span {
      color: #007be9;
    }
  }

  @media screen and (max-width: 1040px) {
    padding: 0;
    h1 {
      display: none;
    }
    p {
      display: block;
    }
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

  @media screen and (max-width: 1040px) {
    color: #fff;
    background-color: #368cec;
    width: fit-content;
    height: 34.4px;
    padding: 6px 16px;
    border-radius: 24px;
    font-size: 14px;
    margin-top: 20px;
  }
`;

const RightBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 0;
  bottom: -11px;

  #desktop_img {
    display: block;
  }

  #mbile_img {
    display: none;
  }

  @media screen and (max-width: 1040px) {
    right: 10px;
    bottom: 0;

    #desktop_img {
      display: none;
    }

    #mbile_img {
      display: block;
      padding-bottom: 10px;
    }
  }
`;

export default GetNews;
