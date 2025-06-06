import { Geist, Geist_Mono } from "next/font/google";
import Mainnav from "./components/Mainnav";
import "./globals.css";
import Button from "./components/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cheezious",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Mainnav/> 
        {children}
         <Button/>
      </body>
    </html>
  );
}
