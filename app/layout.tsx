import Link from 'next/link';
import {ReactNode} from 'react';
interface LayoutProps {
  children: ReactNode;
}
import { orbitron } from './fonts';
import "./Global.css";
import NavBar from '@/components/NavBar';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: {
   default: 'Indie Gamer',
   template: '%s |  India gamer'
  }
};
export default function RootLayout({ children }:LayoutProps) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className='px-4  bg-orange-50 py-2 flex flex-col min-h-screen'>
        <header>
<NavBar />
          </header>
        <main className='py-3 grow'>{children}</main>

        <footer className='border-t py-3 text-center text-slate-500 text-xs'>This is footer </footer>
      </body>
    </html>
  );
}
