import type { Metadata } from 'next';
import { raleway } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quest Room',
  description:
    'Quest Room - це сайт компанії, яка займається організацією ігрових квестів різної тематики та рівня складності.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
