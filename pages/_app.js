import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/Editor.scss";
import "@/styles/ResultSection.scss";
import "@/styles/SQLEditor.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
