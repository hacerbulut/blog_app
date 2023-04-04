import AppRouter from "./router/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { blueGrey, pink } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";


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
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
    </>
  );
}
export default App;