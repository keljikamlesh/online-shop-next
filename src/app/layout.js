
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './Provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shopping',
  description: 'Shopping',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${inter.className} font-poppins`}>
        <StoreProvider>
          {children}
        </StoreProvider>
        </body>
    </html>
  )
}
