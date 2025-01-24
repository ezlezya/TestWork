import MainContainer from "./components/MainContainer";
import AppBar from "./components/Appbar";
import { MyContextProvider } from "./context";

export default async function Home() {

  return (
    <>
      <MyContextProvider>
        <AppBar />
        <MainContainer />
      </MyContextProvider>
    </>
  );
}
