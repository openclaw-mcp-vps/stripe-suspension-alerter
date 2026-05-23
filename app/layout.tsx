import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Suspension Alerter — Early Warning for Payment Processor Risks',
  description: 'Monitor Stripe, PayPal, and Square account health with risk scoring and suspension alerts before it is too late.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="20d5658c-80e1-4f98-b998-08430e600071"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
