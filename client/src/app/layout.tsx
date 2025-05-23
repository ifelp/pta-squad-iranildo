import type { Metadata } from "next";
import Header from "@/components/Header/header";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "A simple boilerplate for next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header/>
        <div className="pt-[131.77px] h-full">
        {children}
        </div>
        </body>
    </html>
  );
}
