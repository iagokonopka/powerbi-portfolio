import './globals.css'

export const metadata = {
  title: 'Portfolio BI - Iago Konopka',
  description: 'Portfolio de Business Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}