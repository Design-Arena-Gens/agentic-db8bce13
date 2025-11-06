import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pershendetje',
  description: 'A friendly greeting in Albanian.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
