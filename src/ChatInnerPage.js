import { Paper } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BlancPage from "./components/innerChat/BlancPage";
import { ChatContainer } from "./components/innerChat/CustomComponents";
import InnerChatHeader from "./components/innerChat/InnerChatHeader";
import MessageBox from "./components/innerChat/MessageBox";
import TypeArea from "./components/innerChat/TypeArea";
import Loading from "./components/layout/Loading";
import { allRooms } from "./slicers/createRoomSlicer";
import { allmessages, submitMessage } from "./slicers/messageSlicer";

const ChatInnerPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const elementRef = useRef();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const allroomsmessages = useSelector(allmessages);
  const roommate = useSelector(allRooms).find((user) => user.id === id);
  const messages = allroomsmessages.filter((item) => item.roomId === id);
  const goBackFn = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    if (!roommate) {
      goBackFn();
    }
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
    setLoading(false);
  }, [roommate, messages, goBackFn]);

  const sendMessage = () => {
    if (inputValue.length > 0) {
      dispatch(
        submitMessage({
          id: id,
          text: inputValue,
          from: "me",
        })
      );
      setInputValue("");
      setTimeout(() => {
        dispatch(
          submitMessage({
            id: id,
            text: "something",
            from: roommate.name,
          })
        );
      }, 1000);
    }
  };
  const backButton = () => {
    navigate("/", { replace: true });
  };

  if (loading) return <Loading />;
  return (
    <Paper
      sx={{
        overflow: "hidden",
        maxHeight: "100vh",
        minHeight: "100vh",
      }}
    >
      <InnerChatHeader userData={roommate} backButton={backButton} />
      <ChatContainer spacing={1}>
        {!messages[0]?.message && <BlancPage />}
        {messages[0]?.message?.map((msg) => {
          return (
            <MessageBox
              key={msg.textId}
              text={msg.text}
              from={msg.from}
              time={msg.sentAt}
            />
          );
        })}

        <div ref={elementRef} />
      </ChatContainer>
      <TypeArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendMessage={sendMessage}
      />
    </Paper>
  );
};

export default ChatInnerPage;
