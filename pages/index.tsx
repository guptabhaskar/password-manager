import Layout from "../components/layout";
import SavedPasswordsList from "../components/SavedPasswordsList";
import MasterPasswordView from "../components/MasterPasswordView";
import PasswordView from "../components/PasswordView";

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <SavedPasswordsList />
      <MasterPasswordView />
      <PasswordView />
    </Layout>
  );
}
