import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";

export default function MePage() {
  const { data: session } = useSession();

  if (typeof window === "undefined") return null;

  if (session) {
    return (
      <Layout>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </Layout>
    );
  }
  return (
    <Layout>
      <AccessDenied />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}
