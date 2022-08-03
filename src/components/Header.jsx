import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <HeaderBox>
        <H1>My Todo List</H1>
        <HeaderTitle>React</HeaderTitle>
      </HeaderBox>
    </>
  );
}

export default Header;

const HeaderBox = styled.div`
  font-family: "Reenie Beanie";
  width: 1200px;
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: 10em;
`;
const HeaderTitle = styled.h1`
  font-size: 5em;
`;
