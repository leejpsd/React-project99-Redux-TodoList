import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const TodoDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Frame>
      <PostBox>
        <IdBox>ID:{location.state.id}</IdBox>
        <TitleBox>{location.state.title}</TitleBox>
        <BodyBox>{location.state.body}</BodyBox>
        <Btn
          onClick={() => {
            navigate("/");
          }}
        >
          🔙
        </Btn>
      </PostBox>
    </Frame>
  );
};

export default TodoDetail;

const Frame = styled.div`
  position: relative;
  width: 1200px;
  height: 800px;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 100px;
  background-image: url("https://elements-cover-images-0.imgix.net/823b5eeb-2452-45bb-bd85-2a5ac3ee6f10?auto=compress%2Cformat&fit=max&w=900&s=d7f24fc85c1d076e831efec619d8e6f5");
  background-size: 100%;
  background-repeat: no-repeat;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
`;
const PostBox = styled.div`
  position: absolute;
  width: 550px;
  height: 500px;
  background-color: #fdff00;
  top: 130px;
  left: 315px;
  border-radius: 20px;
  margin-top: 40px;
`;
const TitleBox = styled.div`
  font-family: "Reenie Beanie", "Nanum Pen Script";
  color: #fd6800;
  font-size: 120px;
  margin-top: 40px;
  font-weight: bold;
`;
const BodyBox = styled.div`
  font-family: "Reenie Beanie", "Nanum Pen Script";
  color: #379246;
  font-size: 100px;
  font-weight: bold;
`;
const IdBox = styled.div`
  font-family: "Nanum Pen Script";
  position: absolute;
  top: -20px;
  font-size: 50px;
`;

const Btn = styled.div`
  font-family: "Reenie Beanie";
  font-weight: bold;
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  bottom: 10px;
`;
