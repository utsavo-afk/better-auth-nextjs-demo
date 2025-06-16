import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../helpers/column.helpers";

export const posts = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar().notNull(),
  content: varchar().notNull(),
  ...timestamps,
});
