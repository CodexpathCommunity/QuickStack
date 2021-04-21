import { Circle } from "better-react-spinkit";
import Head from "next/head";

function Loading() {
  <Head>
    <title>Loading - QuiskStack</title>
    <link rel="icon" href="/images/logos.png" />
  </Head>;
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Circle color="#03056b" size={60} />
      </div>
    </center>
  );
}

export default Loading;
