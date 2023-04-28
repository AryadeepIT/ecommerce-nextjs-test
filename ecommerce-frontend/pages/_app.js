import { BagContextProvider } from "@/components/BagContext";
import { createGlobalStyle } from "styled-components";
import './_app.css';

const GlobalStyles = createGlobalStyle`

  body {
    
    background-color: #eee;
    padding: 0;
    margin: 0;
  }

`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <BagContextProvider>
        <Component {...pageProps} />
      </BagContextProvider>
      
    </>
  );
}
