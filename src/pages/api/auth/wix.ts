import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@wix/sdk';
import { OAuthStrategy } from '@wix/api-client';

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID!,
    clientSecret: process.env.WIX_CLIENT_SECRET!,
    redirectUri: process.env.WIX_REDIRECT_URI!,
  }),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const authUrl = wixClient.auth.getAuthUrl();
  console.log("🔹 Auth URL:", authUrl);

  // Omdirigera användaren till auth URL:en
  res.redirect(authUrl);
}