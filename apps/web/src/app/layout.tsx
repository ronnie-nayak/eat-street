import "./globals.css";
import "@repo/ui/styles.css";
import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "@repo/ui/components/ui/sonner";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Eat Street",
  description: "E-Commerce Grocery App",
};
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="sm:sm:text-[0.85vw]" lang="en">
      <body className={quicksand.className}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
