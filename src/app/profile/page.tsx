import { SignoutButton } from "@/components/SignoutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <p className="text-destructive">No session found Unauthorized</p>;
  }

  return (
    <div>
      <h1 className="text-2xl">Profile</h1>
      <SignoutButton />
      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}
