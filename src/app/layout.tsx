import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: "Feel App Router",
  description: "앱 라우터 적응하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
