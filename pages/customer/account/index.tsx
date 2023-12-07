import { signOut, useSession } from "next-auth/react";

type Props = {};

export default function MyProfile() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Welcome to my profile</h1>
      {session && session.user ? (
        <>
          <h5>{session.user.email}</h5>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
