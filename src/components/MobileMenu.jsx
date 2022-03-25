import React from "react";
import styled from "styled-components";

const MobileMenu = ({ modalOpen }) => {
  return (
    <>
      {modalOpen ? (
        <MobileMenuBox>
          <TopBox>소식받기</TopBox>
          <BottomBox>제휴/문의</BottomBox>
        </MobileMenuBox>
      ) : null}
    </>
  );
};

const MobileMenuBox = styled.div`
  width: 100%;
  height: 92px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  width: 100%;
  height: 50%;
  padding: 8px 0;
  border-bottom: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BottomBox = styled(TopBox)`
  border-bottom: none;
`;

export default MobileMenu;
