import styled from "@emotion/styled";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";

export const CustomInnerHead = styled(Box)({
  padding: 13,
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1,
  position: "sticky",
  top: 0,
  width: "100%",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});

export const HeaderProfileInfo = styled(Box)({
  display: "flex",
  justifyContent: "center",
  items: "center",
  gap: "10px",
  padding: "0 20px",
});

export const InnerHeadBox = styled(Box)({
  display: "flex",
  minWidth: "100%",
  justifyContent: "space-between",
});

export const MsgBox = styled(Box)({
  padding: "5px 15px",
  borderRadius: "25px",
  display: "flex",
  alignItems: "end",
  maxWidth: "90%",
  wordWrap: "break-word",
  gap: 4,
  overflow: "wrap",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});

export const MsgCard = styled(Box)({
  display: "flex",
  width: "95%",
  margin: "0 auto",
  p: 1,
  wordWrap: "break-word",
});

export const TypeBox = styled(Box)({
  position: "sticky",
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 5px",
  boxShadow: "rgba(0, 0, 0, 0.35) 10px 5px 15px;",
});

export const MyInputBase = styled(InputBase)({
  maxWidth: "100%",
  ml: { xs: 1, lg: 4 },
  flex: 1,
  backgroundColor: "gray",
  borderRadius: "25px",
  padding: "0 12px",
  color: "black",
});

export const ChatContainer = styled(Box)({
  marginTop: "auto",
  paddingBottom: "10px",
  flexDirection: "column",
  backgroundImage: `url("/assets/images/chatBackground.png")`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "flex-end",
});

export const BlancMessage = styled(Box)({
  margin: "auto",
  padding: "5vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba( 255, 255, 255, 0.1 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 17px )",
  borderRadius: "10px",
  webkitBackdropFilter: " blur( 17px )",
});
