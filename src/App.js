import AppRouter from "./router/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { blueGrey, pink } from "@mui/material/colors";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { CssBaseline } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:pink["900"],
        light:pink["500"]
      },
      secondary:{
        main:blueGrey["900"]
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
       <CssBaseline/>
      <Provider store= {store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter/>
          </PersistGate>
      </Provider>
      <ToastContainer/>
    </ThemeProvider>
    </>
  );
}
export default App;