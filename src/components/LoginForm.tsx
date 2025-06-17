"use client";

import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { SignInEmailAction } from "@/actions/auth/sign-in.action";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { error } = await SignInEmailAction(formData);
    if (error) {
      toast.error(error);
    }
    toast.success("Login successful");
    router.push("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
