import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  CustomInnerHead,
  HeaderProfileInfo,
  InnerHeadBox,
} from "./CustomComponents";

const InnerChatHeader = ({ backButton, userData }) => {
  return (
    <CustomInnerHead bgcolor={"background.default"}>
      <InnerHeadBox>
        <Button onClick={backButton}>
          <ArrowBackIosIcon />
          <Typography sx={{ fontWeight: "bold" }}>Back</Typography>
        </Button>

        <HeaderProfileInfo>
          <Typography
            color='textPrimary'
            sx={{ margin: "auto", fontWeight: "bold" }}
          >
            {userData?.name}
          </Typography>
          <Avatar />
        </HeaderProfileInfo>
      </InnerHeadBox>
    </CustomInnerHead>
  );
};

export default InnerChatHeader;
