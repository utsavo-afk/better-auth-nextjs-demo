"use client";

// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";

import { signUp } from "@/lib/auth-client";
import { ErrorContext } from "better-auth/react";

export default function SignupForm() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [name, setName] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // use zod and react hook for for robust form handling
    if (!name || !email || !password) {
      toast.error("Incomplete Signup Credentials");
    }

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx: ErrorContext) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {},
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="mb-8">
          <h1 className="text-3xl">Register Your Account</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
