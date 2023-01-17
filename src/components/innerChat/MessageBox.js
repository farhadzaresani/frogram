import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { MsgBox, MsgCard } from "./CustomComponents";

const MessageBox = ({ text, from, time }) => {
  return (
    <MsgCard sx={{ justifyContent: `${from == "me" ? "end" : "start"}` }}>
      <MsgBox bgcolor={from == "me" ? "green" : "gray"}>
        <Typography sx={{ wordWrap: "break-word", maxWidth: "80%" }}>
          {text}
        </Typography>
        <Typography sx={{ fontSize: "10px", opacity: "0.3" }}>
          {time}
          {from == "me" && <CheckIcon sx={{ width: "15px", height: "10px" }} />}
        </Typography>
      </MsgBox>
    </MsgCard>
  );
};

export default MessageBox;
