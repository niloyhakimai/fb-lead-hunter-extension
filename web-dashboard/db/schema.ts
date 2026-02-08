import { pgTable, serial, text, boolean, timestamp, integer } from 'drizzle-orm/pg-core';


export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  telegramId: text('telegram_id').unique().notNull(),
  name: text('name'),
  isActive: boolean('is_active').default(true),
  plan: text('plan').default('free'), // free, pro
  createdAt: timestamp('created_at').defaultNow(),
});


export const keywords = pgTable('keywords', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  word: text('word').notNull(), // : "need developer"
  createdAt: timestamp('created_at').defaultNow(),
});


export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  postUrl: text('post_url').notNull(), 
  contentSnippet: text('content_snippet'),
  foundAt: timestamp('found_at').defaultNow(),
});