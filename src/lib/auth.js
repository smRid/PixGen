import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";
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

const memoryDb = {
  user: [],
  session: [],
  account: [],
  verification: [],
};

const mongoClient = isProduction
  ? new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    })
  : null;

const database = isProduction
  ? mongodbAdapter(mongoClient.db(process.env.MONGODB_DB || "pixgen"), {
      client: mongoClient,
    })
  : memoryAdapter(memoryDb);

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: authBaseURL,
    trustedOrigins,
    database,
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
  advanced: {
    ipAddress: {
      ipAddressHeaders: ["x-vercel-forwarded-for", "x-forwarded-for"],
      disableIpTracking: false,
    },
  },
  experimental: {
    joins: true,
  },
});
