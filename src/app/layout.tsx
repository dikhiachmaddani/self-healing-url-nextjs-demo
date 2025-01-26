import type { Metadata } from "next";
import { ReactQueryProvider } from '../components/providers/react-query-provider';
import "./globals.css";

export const metadata: Metadata = {
  title: "List Albums",
  description: "List Albums",
  creator: "Dikhi Achmad Dani"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
