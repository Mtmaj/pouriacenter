import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'مرکز خرید پوریا',
  description: 'مرکز خرید پوریا جایی بای شما',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body dir={"rtl"} className={inter.className}>{children}</body>
    </html>
  )
}
