"use client";
import { authClient } from "@/lib/auth-client";

const Account = () => {
  const { data } = authClient.useSession();

  return <button className="cursor-pointer">Account</button>;
};
export default Account;
