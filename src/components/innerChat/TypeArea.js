import React from "react";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { MyInputBase, TypeBox } from "./CustomComponents";

const TypeArea = ({ inputValue, setInputValue, sendMessage }) => {
  const runWithEnterKey = (e) => {
    if (e.code === "Enter") {
      sendMessage();
    }
  };

  return (
    <TypeBox bgcolor={"background.default"}>
      <MyInputBase
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => runWithEnterKey(e)}
        placeholder='Message'
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton onClick={sendMessage} type='button' aria-label='search'>
        <SendIcon />
      </IconButton>
    </TypeBox>
  );
};

export default TypeArea;
