
export const metadata = {
  title: 'KẾ Media – Quick Media 3-Day Sprint',
  description: 'Portfolio & service packages by KẾ Media',
}

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="dark">
      <body>{children}</body>
    </html>
  )
}
