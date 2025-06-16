import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let connection: NeonQueryFunction<boolean, boolean>;

if (process.env.NODE_ENV === "production") {
  connection = neon(process.env.DATABASE_URL!);
} else {
  let globalConnection = global as typeof globalThis & {
    connection: NeonQueryFunction<boolean, boolean>;
  };

  if (!globalConnection.connection)
    globalConnection.connection = neon(process.env.DATABASE_URL!);

  connection = globalConnection.connection;
}

const db = drizzle(connection, {
  schema,
  logger: process.env.NODE_ENV !== "production",
});

export { db };
