import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/Editor.scss";
import "@/styles/Editor.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
