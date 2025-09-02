import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luca Colazo - Portfolio | Estudiante y Geek de la Tecnología",
  description: "Portfolio de Luca Colazo, estudiante y apasionado de la tecnología, desarrollando experiencias digitales únicas con las últimas tecnologías web.",
  keywords: ["estudiante", "tecnología", "portfolio", "web", "react", "next.js"],
  authors: [{ name: "Luca Colazo" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
