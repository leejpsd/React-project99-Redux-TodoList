import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delete_todo } from "../redux/modules/todos";
import { isDone_toggle } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemove = (id) => {
    dispatch(delete_todo(id));
  };

  const onToggle = (id) => {
    dispatch(isDone_toggle(id));
  };

  return (
    <TodoBox>
      <TodoUl>
        <TodoLi>
          <TodoA>
            <BtnInfo
              onClick={() => {
                navigate("/detail", {
                  state: {
                    id: todo.id,
                    title: todo.title,
                    body: todo.body,
                  },
                });
              }}
            >
              more
            </BtnInfo>

            <TodoH2 key={todo.id}>{todo.title}</TodoH2>
            <TodoP>{todo.body}</TodoP>

            <BtnBox>
              <Btn onClick={() => onRemove(todo.id)}>삭제</Btn>
              <Btn onClick={() => onToggle(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </Btn>
            </BtnBox>
          </TodoA>
        </TodoLi>
      </TodoUl>
    </TodoBox>
  );
}

export default TodoItem;
const TodoBox = styled.div`
  display: inline-block;
  margin: 20px auto;
  font-family: "Lato";
  color: #fff;
`;

const TodoUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    margin: 1em;
    a {
      text-decoration: none;
      color: #000;
      background: #ffc;
      display: block;
      height: 12em;
      width: 12em;
      padding: 1em;
      box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
      transform: rotate(2deg);
      transition: transform 0.15s linear;

      &:hover {
        box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
        transform: scale(1.25);
        position: relative;
        z-index: 5;
      }
      &:focus {
        box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);
        transform: scale(1.25);
        position: relative;
        z-index: 5;
      }
    }
  }
`;

const TodoLi = styled.li`
  list-style: none;
`;

const TodoA = styled.a``;

const TodoH2 = styled.h2`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 1rem;
  font-family: "Nanum Pen Script";
`;

const TodoP = styled.span`
  font-family: "Nanum Pen Script";
  margin-top: 5px;
  font-size: 2rem;
  font-weight: normal;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 50%,
    #5eff00 50%
  );
  background-size: 200%;
  transition: 0.35s;
  &:hover {
    background-position: -100% 0;
  }
`;

const BtnBox = styled.div`
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
`;

const Btn = styled.button`
  width: 50px;
  height: 20px;
  text-align: center;
  padding: 2px 10px;
  margin-left: 5px;
  border-radius: 20px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid #cfc;
  background-color: #cfc;
  color: #959494a8;
  &:hover {
    width: 55px;
    transition: width 0.7s;
    color: #3a3a3aa8;
    font-weight: bold;
  }
`;

const BtnInfo = styled.button`
  position: absolute;
  float: none;
  top: 5%;
  left: 5%;
  text-align: center;
  width: 40px;
  height: 20px;
  border-radius: 50px;
  border: 2px solid #ccf;
  background-color: #ccf;
  color: #fff;
  transition: width 0.7s;
  &:hover {
    width: 50px;
    transition: width 0.7s;
    color: #3a3a3aa8;
  }
`;
