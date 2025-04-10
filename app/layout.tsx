import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Команда Fullstack разработчиков",
  description: "Мы создаем современные сайты и приложения любой сложности, используя передовые технологии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="/images/logo.png" />
      <body>
        {children}
      </body>
    </html>
  );
}
