import type { Metadata } from "next";
import { Geist, Geist_Mono, Lavishly_Yours, Pacifico, Ballet} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";

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

// Thêm font Pacifico
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400", // Pacifico chỉ có weight 400
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
        className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable} ${pacifico.variable} antialiased`}
      >
        {/* Header hiển thị ở tất cả các trang */}
        <Header />

        {/* Nội dung riêng của từng trang */}
        <main className="pt-20"> 
          {children}
        </main>

        {/* Footer hiển thị ở tất cả các trang */}
        <Footer />

        {/* Chatbot giữ nguyên state khi đổi trang */}
        <ChatWidget />
      </body>
    </html>
  );
}