import { AppProps } from "next/app";
import { ThemeProvider } from "ui";

function App({ Component, pageProps }: AppProps) {
  return (

    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;