import Login from "../components/Login";
// import Loader from "../components/Layout/Loader";
import useRedirect from "../components/Hooks/useRedirect";

function Home() {
  const { render } = useRedirect();

  // if (!render) {
  //   return <Loader />;
  // }

  if (render) {
    return (
      <>
        <Login />
      </>
    );
  }

  // return (
  //     <>
  //       <Login />
  //     </>
  //   );
}

export default Home;
