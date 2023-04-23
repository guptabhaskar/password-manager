import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="bg-gray-100 px-2 shadow-lg sticky top-0 z-50 w-full flex justify-between items-center">
      {/* CONTAINER */}
      <div>
        {/* BOX 1 */}
        <Link href="/" passHref>
          <div className="flex items-center justify-start">
            <div>
              <Image
                alt="logo"
                src="/logo.png"
                width={50}
                height={50}
                className="m-5"
              />
            </div>
            <div className="text-xl">SafeKeep</div>
          </div>
        </Link>
      </div>
      {/* BOX 2 */}
      <div>
        <div className="flex font-light items-end text-lg space-x-6">
          {session?.user && (
            <div className="mr-20">
              <button
                className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Add Password
              </button>
            </div>
          )}
          <div className="mr-2 items-center">
            {!session && (
              <>
                <span className="mr-5 text-lg">You are not signed in</span>
                <a
                  href={`/api/auth/signin`}
                  className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className="rounded-full float-left h-10 w-10 bg-white bg-cover bg-no-repeat mr-2"
                  />
                )}
                <span className="mr-8">
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
