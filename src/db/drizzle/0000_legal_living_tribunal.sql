CREATE TABLE "posts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"content" varchar NOT NULL,
	"updated_at" timestamp (4) with time zone,
	"created_at" timestamp (4) with time zone DEFAULT now() NOT NULL
);
