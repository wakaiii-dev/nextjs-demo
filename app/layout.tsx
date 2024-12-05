import type { Metadata } from "next";
import "./globals.css";
import Silderbar from "./components/silderbar/page";

export const metadata: Metadata = {
  title: "i-Dashboard",
  description: "i-Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-stone-100 text-gray-900">
        <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
          <div>
            <Silderbar />
          </div>
          <div className="bg-stone-50 rounded-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
