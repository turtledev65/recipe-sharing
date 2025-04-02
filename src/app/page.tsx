import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div>
      <main className="">
        <p>{session === null ? "Not signed in" : session.user.name}</p>
      </main>
    </div>
  );
}
