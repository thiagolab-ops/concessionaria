import './globals.css'
import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import SessionProviderWrapper from '@/components/session-provider-wrapper'
import { CartProvider } from '@/lib/cart-context'

export const dynamic = 'force-dynamic'

const metadataBase = process.env.NEXTAUTH_URL
  ? new URL(process.env.NEXTAUTH_URL)
  : new URL('http://localhost:3000')

const appName = process.env.NEXT_PUBLIC_APP_NAME || 'The Barber'
const appDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A melhor barbearia da cidade'
const themeColor = process.env.NEXT_PUBLIC_THEME_COLOR || '#f59f0a'
const secondaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR || '#09090b'

export const metadata: Metadata = {
  metadataBase,
  title: `${appName} - ${appDescription}`,
  description: appDescription,
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: appName,
  },
  openGraph: {
    title: `${appName} - ${appDescription}`,
    description: appDescription,
    images: ['/og-image.png'],
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

import { hexToHsl } from '@/lib/utils'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryHsl = hexToHsl(themeColor)
  const secondaryHsl = hexToHsl(secondaryColor)

  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={themeColor} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --primary: ${primaryHsl};
              --secondary: ${secondaryHsl};
              --ring: ${primaryHsl};
              --border: ${primaryHsl};
            }
          `
        }} />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async></script>
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.OneSignalDeferred = window.OneSignalDeferred || [];
              OneSignalDeferred.push(async function(OneSignal) {
                await OneSignal.init({
                  appId: "${process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID}",
                  safari_web_id: "web.onesignal.auto.64711288-6bf2-4b76-9122-f597eab87b6f",
                  notifyButton: {
                    enable: false,
                  },
                  allowLocalhostAsSecureOrigin: true,
                });
              });
            `,
          }}
        />
      </head>
      <body className="bg-background-dark text-slate-100 font-display antialiased">
        <SessionProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
          >
            <CartProvider>
              {children}
              <Toaster />
            </CartProvider>
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
