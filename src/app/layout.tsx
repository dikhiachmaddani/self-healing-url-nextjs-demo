import type { Metadata } from "next";
import { ReactQueryProvider } from '../components/providers/react-query-provider';
import { MainLayout } from './_components/layout/main-layout';
import "./globals.css";

export const metadata: Metadata = {
  title: "List Albums",
  description: "List Albums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </MainLayout>
      </body>
    </html>
  );
}
