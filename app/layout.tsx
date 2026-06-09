import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Obscura - Capture Moments Beyond the Screen",
  description:
    "Rent vintage Instax and analog cameras from smart rental stations. Experience authentic film photography in urban areas.",
  keywords:
    "vintage camera rental, Instax camera, analog photography, film photography, camera rental station, Jakarta",
  authors: [{ name: "Obscura Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://obscura.rental",
    siteName: "Obscura",
    title: "Obscura - Capture Moments Beyond the Screen",
    description:
      "Rent vintage Instax and analog cameras from smart rental stations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
