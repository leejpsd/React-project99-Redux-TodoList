import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const addItem = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <InputForm onSubmit={addItem}>
      <Input
        placeholder="제목을 입력하세요."
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>

      <Input
        placeholder="내용을 입력하세요."
        type="text"
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></Input>

      <InputBtn type="submit">CLICK</InputBtn>
    </InputForm>
  );
}

export default Form;
const InputForm = styled.form`
  display: flex;
  margin-left: 5em;
  margin-top: 20px;
  width: 1000px;
  height: 500px;
  align-content: center;
  justify-content: center;
  position: absolute;
  overflow: hidden;
`;

const Input = styled.input`
  width: 130px;
  margin-left: 2em;
  height: 40px;
  box-sizing: border-box;
  font-weight: 500;
  background: transparent;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.7),
    7px 7px 20px 0px rgba(0, 0, 0, 0.3), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  text-indent: center;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
    width: 140px;
    transition: width 0.7s;
    color: #000000a8;
    font-weight: bold;
  }
  &::placeholder {
    text-align: center;
  }
`;
const Span = styled.span`
  font-size: 2rem;
`;
const InputBtn = styled.button`
  margin-left: 2em;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-weight: 700;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.7),
    7px 7px 20px 0px rgba(0, 0, 0, 0.3), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  outline: none;
  border: none;
  padding: none;
  color: #646363;
  font-size: 20px;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
    color: #4c4a4a;
    width: 140px;
    transition: width 0.7s;
    color: #000000a8;
    font-weight: bold;
  }
`;
