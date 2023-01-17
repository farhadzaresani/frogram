import { createTheme, ThemeProvider } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ChatInnerPage from "./ChatInnerPage";
import BlancPage from "./components/innerChat/BlancPage";

import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/chat/:id",
        element: <ChatInnerPage />,
      },
    ],
  },
]);

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#388e3c" },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
export default App;
