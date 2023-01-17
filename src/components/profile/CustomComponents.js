import styled from "@emotion/styled";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";

export const MyProfileBox = styled(Box)({
  display: "flex",
  gap: "10px",
  margin: "10px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  minWidth: "100%",
});

export const MyProfileButton = styled(Button)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  backgroundColor: "gray",
  minWidth: "100%",
});

export const MyProfileContainer = styled(Container)({
  margin: "20px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const MyProfileHeader = styled("div")({
  display: "flex",
  justifyContent: "start",
  padding: "5px 0",
  fontWeight: "bold",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});
