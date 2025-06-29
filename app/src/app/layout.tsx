import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blog Management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b p-4 mb-6">
          <nav className="max-w-2xl mx-auto flex justify-between">
            <Link href="/" className="font-bold">ホーム</Link>
            <Link href="/blog/new" className="text-blue-500">新規投稿</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
