import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Phoenix 25 | The annual Techno-Management Fest of FIEM organized by Xplorica</title>
        <meta name="description" content="Join the ultimate college fest experience at Phoenix 25, inspired by Squid Game"/>
        <meta name="keywords" content="Phoenix 25, college fest, Squid Game, technical events, hackathon, gaming"/>
      </Head>
      <body className={`${inter.className} bg-[#121212]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}