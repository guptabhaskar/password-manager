import Layout from "../components/layout";
import SavedPasswordsList from "../components/SavedPasswordsList";

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <SavedPasswordsList />
    </Layout>
  );
}
