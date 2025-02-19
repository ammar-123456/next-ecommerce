// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Lama Dev E-Commerce Application",
//   description: "A complete e-commerce application with Next.js and Wix",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar/>
//         {children}
//         <Footer/>
//         </body>
//     </html>
//   );
// }




// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import dynamic from "next/dynamic";
// import Footer from "@/components/Footer";

// // Dynamisk import av Navbar som en klientkomponent
// const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Lama Dev E-Commerce Application",
//   description: "A complete e-commerce application with Next.js and Wix",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }






import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}