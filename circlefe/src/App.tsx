import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "@/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
