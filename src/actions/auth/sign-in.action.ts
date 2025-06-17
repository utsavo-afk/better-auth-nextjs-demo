"use server";

import { auth } from "@/lib/auth";
import { parseSetCookieHeader } from "better-auth/cookies";
import { cookies, headers } from "next/headers";

export const SignInEmailAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries()) as {
    [k: string]: string;
  };
  const { email, password } = data;
  if (!email) {
    return { error: "Please enter your password" };
  }
  if (!password) {
    return { error: "Please enter your email" };
  }
  try {
    await auth.api.signInEmail({
      headers: await headers(),
      body: {
        email,
        password,
      },
      //   asResponse: true,
    });

    // without nextCookies better-auth
    // const setCookieHeader = res.headers.get("set-cookie");

    // if (setCookieHeader) {
    //   const cookie = parseSetCookieHeader(setCookieHeader);
    //   const cookieStore = await cookies();
    //   const [key, attr] = [...cookie.entries()][0];
    //   const value = attr.value;
    //   const maxAge = attr["max-age"];
    //   const path = attr.path;
    //   const httpOnly = attr.httponly;
    //   const sameSite = attr.samesite;

    //   cookieStore.set(key, decodeURIComponent(value), {
    //     maxAge,
    //     path,
    //     httpOnly,
    //     sameSite,
    //   });
    // }

    return { error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { error: "Something went wrong" };
    }
    return { error: "Internal Server Error" };
  }
};
