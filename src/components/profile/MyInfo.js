import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MyProfileBox } from "./CustomComponents";

const MyInfo = ({ data }) => {
  return (
    <MyProfileBox>
      <Avatar
        sx={{
          width: "100px",
          height: "100px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        }}
        alt='Remy Sharp'
        src={data?.img}
      />
      <Typography color={"white"}>{data.name}</Typography>
    </MyProfileBox>
  );
};

export default MyInfo;
