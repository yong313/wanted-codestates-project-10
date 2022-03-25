import React from "react";
import styled from "styled-components";
import FooterLogo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Container>
          <LeftBox>
            <h1>(주)휴먼스케이프</h1>
            <p className="address">
              서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자:
              장민후
            </p>
            <p>© 2021 Humanscape, All rights reserved.</p>
            <img src={FooterLogo} alt="footerlogo" />
          </LeftBox>
          <RightBox>
            <h1>개인정보처리방침</h1>
            <p>Living healthier by connecting better</p>
          </RightBox>
        </Container>
      </FooterBox>
    </>
  );
};

const FooterBox = styled.div`
  width: 100%;
  height: 215px;
  background-color: #2d3d50;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1040px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  padding: 0 20px;

  @media screen and (max-width: 1040px) {
    flex-direction: column;
    padding: 40px 18px;
  }
`;

const LeftBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #a7afb7;

  .address {
    margin: 25px 0 10px 0;
  }

  h1 {
    font-size: 15.5px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
  }

  img {
    margin-top: 22px;
  }
  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

const RightBox = styled(LeftBox)`
  width: 50%;
  height: auto;
  align-items: flex-end;
  padding-top: 33px;

  h1 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 27px;
    cursor: pointer;
  }

  p {
    font-size: 16px;
  }

  @media screen and (max-width: 1040px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export default Footer;
