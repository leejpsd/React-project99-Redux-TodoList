import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import styled from "styled-components";

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state);
  const todoListWorking = todos.filter((e) => !e.isDone);
  const todoListDone = todos.filter((e) => e.isDone);

  return (
    <>
      <div>
        <H2>Working.. 🔥</H2>
        <div>
          {todoListWorking.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
        <H2Done>Done..! 🎉</H2Done>
        <div>
          {todoListDone.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TodoListContainer;
const H2 = styled.h2`
  font-family: "Reenie Beanie";
  font-size: 4em;
  margin-top: 1.2em;
`;

const H2Done = styled.h2`
  font-family: "Reenie Beanie";
  font-size: 4em;
  margin-top: -0.3em;
`;
