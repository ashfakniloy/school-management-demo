import { wrapper } from "../redux/app/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
