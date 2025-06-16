import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  updatedAt: timestamp("updated_at", { precision: 4, withTimezone: true }),
  createdAt: timestamp("created_at", { precision: 4, withTimezone: true })
    .defaultNow()
    .notNull(),
};
