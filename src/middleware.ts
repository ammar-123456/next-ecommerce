// import { OAuthStrategy, createClient } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
//   });

//   const tokens = await wixClient.auth.generateVisitorTokens();
//   res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//     maxAge: 60 * 60 * 24 * 30,
//   });

//   return res;
// };




// import { OAuthStrategy, createClient } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   // Kontrollera om refreshToken redan finns
//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   // Skapa Wix-klienten med rätt autentisering
//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.NEXT_PUBLIC_WIX_CLIENT_SECRET!, // Se till att lägga till detta
//     }),
//   });

//   try {
//     // Generera visitor tokens
//     const tokens = await wixClient.auth.generateVisitorTokens();

//     // Sätt refreshToken i en cookie
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30, // 30 dagar
//       httpOnly: true, // Skydda cookie från att vara tillgänglig på klientsidan
//       secure: process.env.NODE_ENV === 'production', // Använd secure flagga på produktion
//       sameSite: 'Strict', // Säkerställ att cookien endast skickas från samma domän
//     });

//     return res;
//   } catch (error) {
//     console.error("Error generating visitor tokens:", error);
//     return new NextResponse("Failed to generate tokens", { status: 500 });
//   }
// };







// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const res = NextResponse.next();

//   // Skapa Wix-klienten
//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     // Hämta visitor tokens
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log(tokens);

//     // Hantera tokens (t.ex. spara dem i en cookie)
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30,
//     });
//   } catch (error) {
//     console.error("Error generating tokens:", error);
//     // Returnera ett fel-svar med rätt status
//     return NextResponse.json({ error: "Failed to generate visitor tokens" }, { status: 500 });
//   }

//   return res;
// };







// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const res = NextResponse.next();

//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log('Tokens:', tokens);

//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30,
//     });
//   } catch (error: any) {
//     console.error("Error generating tokens:", error.message || error);
//     return NextResponse.json({ error: `Failed to generate visitor tokens: ${error.message || error}` }, { status: 500 });
//   }

//   return res;
// };






// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   // Kontrollera om refreshToken redan finns
//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     console.log("Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);

//     // Sätt refreshToken i en cookie
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30, // 30 dagar
//     });
//   } catch (error) {
//     console.error("Error generating visitor tokens:", error);
//     return res.status(500).json({ error: "Failed to generate visitor tokens", details: error.message });
//   }

//   return res;
// };







// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   // Kontrollera om refreshToken redan finns
//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     console.log("Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);

//     // Sätt refreshToken i en cookie
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30, // 30 dagar
//     });
//   } catch (error) {
//     console.error("Error generating visitor tokens:", error);
//     console.error("Error details:", error?.response || error?.message || error);
//     return res.status(500).json({ error: "Failed to generate visitor tokens", details: error.message });
//   }

//   return res;
// };





// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   // Kontrollera om refreshToken redan finns
//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     console.log("Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);

//     // Sätt refreshToken i en cookie
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30, // 30 dagar
//     });
//   } catch (error) {
//     console.error("Error generating visitor tokens:", error);
//     console.error("Error details:", error?.response || error?.message || error);

//     // Skicka ett felmeddelande med en 500-statuskod
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }

//   return res;
// };





// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { NextRequest, NextResponse } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   // Kontrollera om refreshToken redan finns
//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   try {
//     console.log("Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);

//     // Sätt refreshToken i en cookie
//     res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//       maxAge: 60 * 60 * 24 * 30, // 30 dagar
//     });
//   } catch (error: any) {
//     console.error("Error generating visitor tokens:", error);

//     // Logga mer detaljerad felinformation
//     if (error?.response) {
//       console.error("Response from Wix API:", error.response);
//     }
//     if (error?.stack) {
//       console.error("Error stack:", error.stack);
//     }

//     // Skicka ett felmeddelande med en 500-statuskod
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }

//   return res;
// };




// import { NextResponse } from "next/server";
// import { createClient, OAuthStrategy } from "@wix/sdk";

// // Skapa Wix klient
// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//   }),
// });

// export async function middleware(req: any) {
//   try {
//     console.log("Generating visitor tokens...");
    
//     // Generera tokens
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);
    
//     // Här kan du spara tokens i en cookie eller hantera dem på något annat sätt

//     return NextResponse.next(); // Fortsätt behandla begäran
//   } catch (error: any) {
//     // Logga felinformation
//     console.error("Error generating visitor tokens:", error);

//     if (error?.response) {
//       console.error("Response from Wix API:", error.response);
//     }
//     if (error?.stack) {
//       console.error("Error stack:", error.stack);
//     }

//     // Returnera ett 500-fel med detaljerad information
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }
// }




// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/sdk/auth/oauth2';
// import { NextResponse } from 'next/server';


// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });


// export async function middleware(req: any) {
//   try {
//     console.log("Generating visitor tokens...");

//     // Generera tokens
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("Tokens generated:", tokens);

//     // Här kan du spara tokens i en cookie eller hantera dem på något annat sätt

//     return NextResponse.next(); // Fortsätt behandla begäran
//   } catch (error: any) {
//     // Logga felinformation
//     console.error("Error generating visitor tokens:", error);

//     // Kontrollera om vi har mer detaljerat fel via error.response eller error.stack
//     if (error?.response) {
//       console.error("Response from Wix API:", error.response);
//       console.error("Response status:", error.response?.status);
//       console.error("Response body:", error.response?.data);
//     }

//     // Om det finns en stacktrace, logga den också
//     if (error?.stack) {
//       console.error("Error stack:", error.stack);
//     }

//     // Returnera ett 500-fel med detaljerad information
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }
// }




// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/sdk/auth/oauth2';

// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });

// export async function middleware(req: Request) {
//   try {
//     console.log("🔹 Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("✅ Tokens generated:", tokens);

//     return NextResponse.json({ tokens }, { status: 200 });
//   } catch (error) {
//     console.error("🚨 Error generating visitor tokens:", error);
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }
// }




// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/sdk/auth/oauth2';

// console.log("🔹 WIX_CLIENT_ID:", process.env.WIX_CLIENT_ID);
// console.log("🔹 WIX_CLIENT_SECRET:", process.env.WIX_CLIENT_SECRET ? "Exists" : "Not found");
// console.log("🔹 WIX_REDIRECT_URI:", process.env.WIX_REDIRECT_URI);

// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });

// export async function middleware(req: Request) {
//   try {
//     console.log("🔹 Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("✅ Tokens generated:", tokens);

//     return NextResponse.json({ tokens }, { status: 200 });
//   } catch (error: any) {
//     console.error("🚨 Error generating visitor tokens:", error);
//     return NextResponse.json(
//       { 
//         error: "Failed to generate visitor tokens", 
//         details: error?.message || "No error message available",
//         stack: error?.stack || "No stack trace available"
//       },
//       { status: 500 }
//     );
//   }
// }



// import { createClient } from '@wix/sdk';
// import { authentication } from '@wix/sdk/auth';

// export async function middleware(req: Request) {
//   const wixClient = createClient({
//     modules: { authentication },
//     auth: authentication({
//       clientId: process.env.WIX_CLIENT_ID!,
//       clientSecret: process.env.WIX_CLIENT_SECRET!,
//     }),
//   });

//   // Logga wixClient.auth för att säkerställa att den är korrekt inställd
//   console.log("🔹 wixClient.auth:", wixClient.auth);

//   try {
//     console.log("🔹 Generating visitor tokens...");
//     const tokens = await wixClient.auth.generateVisitorTokens();
//     console.log("✅ Tokens generated:", tokens);
//     return NextResponse.json({ tokens }, { status: 200 });
//   } catch (error) {
//     console.error("🚨 Error generating visitor tokens:", error);
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }
// }


// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';

// // Skapa Wix klienten
// export async function middleware(req: Request) {
//   const wixClient = createClient({
//     clientId: process.env.WIX_CLIENT_ID,
//     clientSecret: process.env.WIX_CLIENT_SECRET,
//     redirectUri: process.env.WIX_REDIRECT_URI,
//   });

//   console.log("🔹 wixClient.auth methods:", Object.keys(wixClient.auth));


//   try {
//     console.log("🔹 Generating visitor tokens...");
    
//     // Här kan du försöka med rätt metod för att generera tokens
//     const tokens = await wixClient.auth.generateVisitorTokens();  // eller annan metod
//     console.log("✅ Tokens generated:", tokens);
    
//     return NextResponse.json({ tokens }, { status: 200 });
//   } catch (error) {
//     console.error("🚨 Error generating visitor tokens:", error);
//     return NextResponse.json(
//       { error: "Failed to generate visitor tokens", details: error.message },
//       { status: 500 }
//     );
//   }
// }



// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/sdk/auth/oauth2';

// // Logga miljövariabler för felsökning
// console.log("🔹 WIX_CLIENT_ID:", process.env.WIX_CLIENT_ID);
// console.log("🔹 WIX_CLIENT_SECRET:", process.env.WIX_CLIENT_SECRET ? "Exists" : "Not found");
// console.log("🔹 WIX_REDIRECT_URI:", process.env.WIX_REDIRECT_URI);

// // Skapa Wix-klienten
// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });

// // Middleware funktion för att hantera visitor tokens
// export async function middleware(req: Request) {
//   try {
//     console.log("🔹 Getting access token...");
//     const accessToken = await wixClient.auth.getAccessToken();
//     console.log("✅ Access token:", accessToken);
//     return NextResponse.json({ accessToken }, { status: 200 });
//   } catch (error: any) {
//     console.error("🚨 Error getting access token:", error);
//     return NextResponse.json(
//       { 
//         error: "Failed to get access token", 
//         details: error?.message || "No error message available",
//         stack: error?.stack || "No stack trace available"
//       },
//       { status: 500 }
//     );
//   }
  




// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/api-client'; // Korrekt import

// // Skapa Wix-klienten
// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });

// export async function middleware(req: Request) {
//   try {
//     console.log("🔹 Getting access token...");
//     const accessToken = await wixClient.auth.getAccessToken();
//     console.log("✅ Access token:", accessToken);
//     return NextResponse.json({ accessToken }, { status: 200 });
//   } catch (error: any) {
//     console.error("🚨 Error getting access token:", error);

//     return NextResponse.json(
//       { 
//         error: "Failed to get access token", 
//         details: error?.message || "No error message available",
//         stack: error?.stack || "No stack trace available"
//       },
//       { status: 500 }
//     );
//   }
// }



// import { NextResponse } from 'next/server';
// import { createClient } from '@wix/sdk';
// import { OAuthStrategy } from '@wix/api-client';

// // Skapa Wix-klienten
// const wixClient = createClient({
//   auth: OAuthStrategy({
//     clientId: process.env.WIX_CLIENT_ID!,
//     clientSecret: process.env.WIX_CLIENT_SECRET!,
//     redirectUri: process.env.WIX_REDIRECT_URI!,
//   }),
// });

// export async function middleware(req: Request) {
//   try {
//     console.log("🔹 Getting access token...");

//     // Initiera OAuth2-flödet och hämta access token
//     const authUrl = wixClient.auth.getAuthUrl(); // Hämta auth URL för OAuth2-flöde
//     console.log("🔹 Auth URL:", authUrl);

//     // OAuth2-flödet kräver att användaren besöker authUrl och godkänner åtkomst
//     // Efter godkännande får du en auth-kod som du kan använda för att hämta access token
//     const accessToken = await wixClient.auth.getAccessTokenFromCode(authCode); // Ersätt authCode med den kod du får från OAuth2-flödet
//     console.log("✅ Access token:", accessToken);

//     return NextResponse.json({ accessToken }, { status: 200 });
//   } catch (error: any) {
//     console.error("🚨 Error getting access token:", error);

//     return NextResponse.json(
//       { 
//         error: "Failed to get access token", 
//         details: error?.message || "No error message available",
//         stack: error?.stack || "No stack trace available"
//       },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from 'next/server';
import { createClient } from '@wix/sdk';
import { OAuthStrategy } from '@wix/api-client';

const wixClient = createClient({
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID!,
    clientSecret: process.env.WIX_CLIENT_SECRET!,
    redirectUri: process.env.WIX_REDIRECT_URI!,
  }),
});

export async function middleware(req: Request) {
  const authUrl = wixClient.auth.getAuthUrl();
  console.log("🔹 Auth URL:", authUrl);

  // Omdirigera användaren till auth URL:en
  return NextResponse.redirect(authUrl);
}