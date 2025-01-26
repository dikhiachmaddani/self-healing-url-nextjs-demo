import React from "react";

export function MainLayout({ children, title }: Readonly<{
    children: React.ReactNode;
    title?: string
}>) {
    return (
        <>
            <header className="mx-auto container my-10">
                <h1 className="font-semibold text-2xl mb-4 text-blue-950">{title ?? 'Self Healing URL'}</h1>
                <p>data yang didapatkan berasal dari jsonplaceholder Albums.</p>
            </header>
            <main className="mx-auto container">
                {children}
            </main>
        </>
    )
}