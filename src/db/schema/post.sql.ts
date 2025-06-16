import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../helpers/column.helpers";
import { users as user } from "./better-auth/user.sql";
import { relations } from "drizzle-orm";

export const posts = pgTable("posts", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar().notNull(),
  content: varchar().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  ...timestamps,
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(user),
}));
