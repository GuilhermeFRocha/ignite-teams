import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
