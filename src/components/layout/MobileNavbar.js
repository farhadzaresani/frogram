import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SettingsIcon from "@mui/icons-material/Settings";

export default function MobileNavbar({ value, setValue }) {
  const changePage = (data) => {
    setValue(data);
  };

  return (
    <Box sx={{ maxWidth: "20vw" }}>
      <CssBaseline />
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { lg: "none" },
        }}
      >
        <BottomNavigation
          showLabels
          sx={{
            borderTop: "1px solid #388e3ca3",
            boxShadow: "rgba(0, 0, 0, 0.35) 10px 10px 10px 15px;",
          }}
          value={value}
          onChange={(event, newValue) => {
            changePage(newValue);
          }}
        >
          <BottomNavigationAction label='Chats' icon={<QuestionAnswerIcon />} />
          <BottomNavigationAction label='Setting' icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
