import { signIn, signOut, useSession } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const { data: session } = useSession();
  const handleLoginWithGoogle = () => {
    signIn("google");
  };
  const handleLoginWithApple = () => {
    signIn("apple", {
      callbackUrl: "/customer/account",
    });
  };
  let loginElem = (
    <>
      <button
        className="p-3 bg-blue-600 text-white font-bold rounded"
        onClick={() => handleLoginWithGoogle()}
      >
        Login with Google
      </button>
      <button
        className="p-3 bg-blue-600 text-white font-bold rounded"
        onClick={() => handleLoginWithApple()}
      >
        Login with Apple
      </button>
    </>
  );

  if (session && session.user) {
    loginElem = (
      <div>
        <p>Debug </p>
        Logged in as {session.user.email}
        <button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-2xl font-bold my-4">My App</div>
      {/* {loginElem} */}
      {session && session.user ? (
        <>
          <h3>Debug x19</h3>
          <h5>{session.user.email}</h5>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <>
          <button
            className="p-3 bg-blue-600 text-white font-bold rounded"
            onClick={() => handleLoginWithGoogle()}
          >
            Login with Google
          </button>
          <button
            className="p-3 bg-blue-600 text-white font-bold rounded"
            onClick={() => handleLoginWithApple()}
          >
            Login with Apple
          </button>
        </>
      )}
    </>
  );
}
