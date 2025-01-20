import React from "react";

export function MainLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="mx-auto container">
            {children}
        </main>
    )
}