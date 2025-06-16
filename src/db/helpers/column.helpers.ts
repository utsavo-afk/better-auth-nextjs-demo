import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: timestamp({ precision: 4, withTimezone: true }),
  created_at: timestamp({ precision: 4, withTimezone: true })
    .defaultNow()
    .notNull(),
};
