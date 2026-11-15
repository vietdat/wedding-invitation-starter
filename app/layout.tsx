import type { Metadata } from "next";
import "./globals.css";
import { weddingData } from "@/lib/wedding-data";

export const metadata: Metadata = {
  title: `${weddingData.heroTitle} | Thiệp cưới online`,
  description: `Thiệp cưới online của ${weddingData.groom.fullName} và ${weddingData.bride.fullName} — ${weddingData.dateDisplay}.`,
  openGraph: {
    title: `${weddingData.heroTitle} | Thiệp cưới online`,
    description: `Thiệp cưới online của ${weddingData.groom.fullName} và ${weddingData.bride.fullName}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
