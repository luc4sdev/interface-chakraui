import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export default function Home() {

  const isHomePage = true;

  return (
    <Box w='100vw' h='100vh'>
    <Header isHomePage={isHomePage}/>
    <Main/>
    </Box>
  )
}
