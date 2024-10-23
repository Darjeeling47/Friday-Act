// import css
import './globals.css'

// import components
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'

// import types
import type { Metadata } from 'next'

// import fonts
import { Inter } from 'next/font/google'

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Metadata for the app
export const metadata: Metadata = {
  title: 'Friday Act',
  description: 'Friday Act app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'}>
      <body className={inter.className}>
        <NavBar />
        <div className='container mx-auto mt-14'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
