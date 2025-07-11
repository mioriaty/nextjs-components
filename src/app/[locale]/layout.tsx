import { routing } from '@/i18n/routing';
import { Locale } from '@/libs/constants/locale';
import { cn } from '@/libs/utils/classnames';
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export async function generateMetadata(props: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale });

  return {
    title: {
      template: `%s | ${t('welcome')}`,
      default: t('welcome')
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
  }>
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {/* <NextjsTopLoader height={2} showSpinner={false} color="hsl(var(--primary))" /> */}
        <NextIntlClientProvider messages={messages}>
          {/* <TanstackProvider> */}
          <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            {/* <Toaster /> */}
          </NextThemesProvider>
          {/* </TanstackProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
