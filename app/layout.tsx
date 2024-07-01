import type { Metadata } from "next";
import "./globals.css";
import { aeonik, grozenMedical } from "./fonts";

export const metadata: Metadata = {
  title: "OSU - Gastrointestinal VR Experience",
  description:
    "Explore immersive experiences designed to enhance your mind, body, and overall well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonik.className} ${grozenMedical.variable} bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
