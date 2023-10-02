import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import ApplyProvider from '@/context/ApplyProvider'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
      <Nav/>
        <ApplyProvider>
        {children}
        </ApplyProvider>
        <Toaster />
        <Footer/>
        </body>
        
    </html>
  )
}
