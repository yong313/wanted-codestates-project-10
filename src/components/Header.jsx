import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo_icon.svg";
import { ReactComponent as MobileIcon } from "../assets/mobile_menu.svg";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
  const wrapperRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <HeaderBox ref={wrapperRef}>
        <Container>
          <LeftBox>
            <LogoIcon className="logo" />
          </LeftBox>
          <RightBox>
            <p>소식받기</p>
            <p>제휴/문의</p>
            <MobileIcon id="mobile_menu" onClick={openModal} />
          </RightBox>
        </Container>
      </HeaderBox>
      <MobileMenu modalOpen={modalOpen} />
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

  #mobile_menu {
    display: none;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;

    &:first-child {
      margin-right: 51px;
    }
    &:last-child {
      margin-right: 16px;
    }
  }

  @media screen and (max-width: 1040px) {
    p {
      display: none;
    }
    #mobile_menu {
      cursor: pointer;
      display: block;
    }
  }
`;

export default Header;
