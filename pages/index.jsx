import SavedPasswordsList from "../components/SavedPasswordsList";
import CreateMaster from "../components/CreateMaster";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import models from "../db/models";

export default function IndexPage({ exists = null }) {
  if (exists !== null) {
    return <>{!exists ? <CreateMaster /> : <SavedPasswordsList />}</>;
  } else {
    return (
      <>
        <div className="flex flex-col items-center text-center text-xl h-screen bg-blue-50">
          <div className="font-bold text-xl pt-48">
            You are not signed in yet.
          </div>
          <div className="flex items-center justify-start">
            <div>
              <Image
                alt="logo"
                src="/logo.png"
                width={100}
                height={100}
                className="m-5"
              />
            </div>
            <div className="text-3xl font-semibold">SafeKeep</div>
          </div>
        </div>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    const key = await models.key.findOne({
      where: {
        user_id: session?.user?.id,
      },
    });
    return {
      props: {
        exists: key ? true : false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
