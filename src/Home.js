import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ChatsList from "./components/chatlist/ChatsList";
import MobileNavbar from "./components/layout/MobileNavbar";
import Profile from "./components/profile/Profile";

const Home = () => {
  const [value, setValue] = useState(0);
  const router = useLocation();
  return (
    <>
      <Stack direction='row' justifyContent='space-between'>
        <Box
          flex={1}
          sx={{
            display: { xs: "none", sm: "block" },
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
          }}
        >
          {value === 0 ? (
            <ChatsList setValue={setValue} />
          ) : (
            <Profile setValue={setValue} />
          )}
        </Box>
        <Box flex={3}>
          <Outlet />
        </Box>
      </Stack>
      {!router.pathname.includes("chat") && (
        <>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            {value === 0 ? <ChatsList /> : <Profile />}
            <MobileNavbar value={value} setValue={setValue} />
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
