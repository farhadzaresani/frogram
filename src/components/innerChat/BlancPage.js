import { Typography } from "@mui/material";
import React from "react";
import { BlancMessage, ChatContainer } from "./CustomComponents";

const BlancPage = () => {
  return (
    <ChatContainer>
      <BlancMessage>
        <img
          width={50}
          height={50}
          className='headLogo'
          src='/assets/images/frog.png'
        />
        <Typography>lets start your conversation</Typography>
      </BlancMessage>
    </ChatContainer>
  );
};

export default BlancPage;
