import type { Metadata } from "next";
import Header from "@/components/Header/header";
import "styles/globals.css";
import { PageTransitionWrapper } from "@/components/pageTransition";

export const metadata: Metadata = {
  title: "Brillion",
  icons: {
    icon: './img/gato.png'
  },
  description: "Sua clínica na ponta das patas.",
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
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </div>
        </body>
    </html>
  );
}