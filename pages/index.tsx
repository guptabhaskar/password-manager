import SavedPasswordsList from "../components/SavedPasswordsList";
import MasterPasswordView from "../components/MasterPasswordView";
import PasswordView from "../components/PasswordView";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function IndexPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <SavedPasswordsList />
        <MasterPasswordView />
      </>
    );
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
