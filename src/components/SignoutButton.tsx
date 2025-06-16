"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { ErrorContext } from "better-auth/react";

export const SignoutButton = () => {
  const router = useRouter();

  async function handleSingout() {
    await signOut({
      fetchOptions: {
        onError: (ctx: ErrorContext) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });
  }

  return (
    <Button size="sm" onClick={handleSingout} variant="destructive">
      Sign Out
    </Button>
  );
};
