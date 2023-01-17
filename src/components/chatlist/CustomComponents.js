import styled from "@emotion/styled";
import { Box, List, ListItem } from "@mui/material";

export const CustomChatsList = styled(List)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  maxHeight: "100vh",
  width: "100%",
  minHeight: "100vh",
});
export const CustomListItem = styled(ListItem)({
  color: "gray",
  width: "95%",
  margin: "0 auto",
  padding: 10,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
  alignItems: "flex-start",
});

export const ChatListBox = styled(Box)({
  margin: "auto",
  overflow: "hidden",
  maxHeight: "100vh",
  minHeight: "100vh",
});

export const CustomListHead = styled(Box)({
  padding: 4,
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1,
  position: "sticky",
  top: 0,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});
