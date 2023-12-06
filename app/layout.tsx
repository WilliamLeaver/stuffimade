import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stuff I Made',
  description: 'It is Stuff I Made; Mostly Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="rounded-3xl h-full m-4 p-5 bg-slate-700">
          {children}
        </div>
        
      </body>
    </html>
  )
}
