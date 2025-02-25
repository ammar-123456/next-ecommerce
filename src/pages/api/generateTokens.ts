import { createClient, OAuthStrategy } from "@wix/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    clientSecret: process.env.WIX_CLIENT_SECRET!,
  }),
});

const getVisitorTokens = async () => {
  try {
    const tokens = await wixClient.auth.generateVisitorTokens();
    return tokens;
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw error;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tokens = await getVisitorTokens();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate tokens" });
  }
}
