import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

// POST /api/auth/sign-up/email

export const { POST, GET } = toNextJsHandler(auth);
