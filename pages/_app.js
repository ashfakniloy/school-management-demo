import Head from "next/head";
import { wrapper } from "../redux/app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>School management system</title>
        <meta name="description" content="school management" />
        <meta name="keywords" content="school management" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
