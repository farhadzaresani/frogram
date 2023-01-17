import { Button, Typography } from "@mui/material";
import React from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { CustomListHead } from "./CustomComponents";

const ChatLisHeader = ({ openModal }) => {
  return (
    <CustomListHead bgcolor={"background.default"}>
      <Typography color={"white"} sx={{ margin: 2, fontWeight: "bold" }}>
        Messages
      </Typography>
      <Button onClick={() => openModal()}>
        <AddCommentIcon />
      </Button>
    </CustomListHead>
  );
};

export default ChatLisHeader;
