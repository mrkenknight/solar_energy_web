import type { Metadata } from "next";
import { Geist, Geist_Mono, Lavishly_Yours } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Thêm font Lavishly Yours
const lavishlyYours = Lavishly_Yours({
  variable: "--font-lavishly-yours",
  subsets: ["latin"],
  weight: "400", // Lavishly Yours chỉ có weight 400
});

export const metadata: Metadata = {
  title: "ĐIỆN XANH - Giải pháp năng lượng mặt trời",
  description: "Hệ thống điện mặt trời và pin lưu trữ tiên tiến, dịch vụ hàng đầu với đội ngũ giàu kinh nghiệm nhất",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable} antialiased`}
      >
        {children}
        
        {/* Custom AI Chat Widget */}
      </body>
    </html>
  );
}