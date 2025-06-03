'use client'
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Script strategy="beforeInteractive"  src="https://ven03799.service-now.com/scripts/sn_csm_ec.js?v=5.6"/>
      {children}
      <Script id="em"
  strategy="afterInteractive"
        >{`
        SN_CSM_EC.init({
          moduleID: "https://ven03799.service-now.com/#9c293dcf9731a6108534b286f053af4e",
          loadFeature: SN_CSM_EC.loadEMFeature()
        });
        `}</Script>
      </body>
    </html>
  );
}
