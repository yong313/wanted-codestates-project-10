import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo_icon.svg";

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Container>
          <LeftBox>
            <LogoIcon className="logo" />
          </LeftBox>
          <RightBox>
            <p>소식받기</p>
            <p>제휴/문의</p>
          </RightBox>
        </Container>
      </HeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  width: 100%;
  height: 56px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  padding: 0 20px;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  .logo {
    cursor: pointer;
  }
`;

const RightBox = styled(LeftBox)`
  justify-content: flex-end;

  p {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:first-child {
      margin-right: 51px;
    }
  }
`;

export default Header;
