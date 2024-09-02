import type { Viewport } from "next";
import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "@/styles/tailwind.css";
import clsx from "clsx";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-fraunces",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F2EAE2",
};

export const metadata: Metadata = {
  title: "Arda Eker - Product Preview Card Component",
  description:
    "This is a solution to the Product Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
  metadataBase: new URL(
    "https://fm-2024-product-preview-card-component.vercel.app/",
  ),
  openGraph: {
    title: "Arda Eker - Product Preview Card Component",
    description:
      "This is a solution to the Product Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    url: "fm-2024-product-preview-card-component.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Arda Eker - Product Preview Card Component",
    description:
      "This is a solution to the Product Preview Card Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "fm-2024-product-preview-card-component.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx("antialiased", fraunces.variable, montserrat.variable)}
      >
        {children}
      </body>
    </html>
  );
}
