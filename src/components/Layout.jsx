import React from "react";
import Header from "./Header";
import Form from "./Form";
import TodoListContainer from "./TodoListContainer";
import styled from "styled-components";

function Layout() {
  return (
    <StBox>
      <Header />
      <Form />
      <TodoListContainer />
    </StBox>
  );
}

export default Layout;

const StBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 950px;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 20px;
  background-image: url("https://i.pinimg.com/564x/a0/f4/6b/a0f46b8f8f82b0ce199e09df76a6b913.jpg");
  background-size: 1200px 1200px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
`;
