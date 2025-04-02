import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const testTable = pgTable("tests", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
});
