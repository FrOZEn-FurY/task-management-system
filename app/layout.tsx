import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootProvider from "@/redux/provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Main from "@/components/main/main";
import GetInitialData from "@/components/getInitialData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          <GetInitialData></GetInitialData>
          <Navbar></Navbar>
          <Main>{children}</Main>
          <Footer></Footer>
        </RootProvider>
        {
          // Including the provider given by redux, to wrap the application inside a provider that gives us all the states made.
        }
      </body>
    </html>
  );
}
