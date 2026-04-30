import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { dash } from "@better-auth/infra";
import { MongoClient } from "mongodb";

const isProduction = process.env.NODE_ENV === "production";
const authBaseURL = isProduction
  ? process.env.BETTER_AUTH_URL
  : process.env.BETTER_AUTH_LOCAL_URL || "http://localhost:3000";

const trustedOrigins = [
  authBaseURL,
  process.env.BETTER_AUTH_URL,
  ...(process.env.BETTER_AUTH_TRUSTED_ORIGINS?.split(",") || []),
]
  .map((origin) => origin?.trim())
  .filter(Boolean);

const client = new MongoClient(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
});
const db = client.db(process.env.MONGODB_DB || "pixgen");

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: authBaseURL,
    trustedOrigins,
    database: mongodbAdapter(db, {
    client
  }),
     emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
  plugins: [
    dash({
      apiKey: process.env.BETTER_AUTH_API_KEY,
    }),
  ],
});
