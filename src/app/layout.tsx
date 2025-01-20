import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from '../components/providers/react-query-provider';
import { MainLayout } from './_components/layout/main-layout';

export const metadata: Metadata = {
  title: "One Piece Fruit",
  description: "One Piece Fruit",
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
