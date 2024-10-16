// import css
import Footer from '@/components/footer/Footer'
import './globals.css'

// import types
import type { Metadata } from 'next'

// import fonts
import { Prompt } from 'next/font/google'

// Font configurations
const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Metadata for the app
export const metadata: Metadata = {
  title: 'Friday Act',
  description: 'Friday Act app',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={"en"}>
      <body className={prompt.className}>
        {children}
        <Footer />        
      </body>
    </html>
  )
}
