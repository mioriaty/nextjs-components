'use client';

import { SelectLanguage } from '@/libs/components/select-language';

export default function SelectLanguagePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Select Language
        </h1>
        <p className="text-xl text-muted-foreground">
          A language selector component with internationalization support for switching between different locales.
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <a
          href="https://github.com/your-repo/select-language"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Edit on GitHub
        </a>
      </div>

      <section id="preview" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Preview
        </h2>
        <div className="rounded-lg border p-8">
          <div className="flex items-center justify-center">
            <SelectLanguage />
          </div>
        </div>
      </section>

      <section id="installation" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <code className="text-sm">
            pnpm add @radix-ui/react-select next-intl
          </code>
        </div>
      </section>

      <section id="usage" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="text-sm overflow-x-auto">
{`import { SelectLanguage } from '@/libs/components/select-language';

export function Example() {
  return <SelectLanguage />;
}`}
          </pre>
        </div>
      </section>

      <section id="setup" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Setup Requirements
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This component requires next-intl to be configured in your Next.js application. Here's the basic setup:
          </p>
          
          <div>
            <h3 className="text-lg font-medium mb-2">1. Configure i18n routing</h3>
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'vi', 'de', 'es', 'fr', 'ja', 'ko', 'th', 'zh-Hans', 'zh-Hant'],
  defaultLocale: 'en'
});`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">2. Define locale constants</h3>
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`// src/libs/constants/locale.ts
export type Locale = 'en' | 'vi' | 'de' | 'es' | 'fr' | 'ja' | 'ko' | 'th' | 'zh-Hans' | 'zh-Hant';`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">3. Configure navigation</h3>
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`// src/i18n/navigation.ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Multi-language Support</h3>
            <p className="text-sm text-muted-foreground">
              Supports 10 different languages including English, Vietnamese, German, Spanish, French, Japanese, Korean, Thai, and Chinese (Simplified & Traditional).
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Automatic Navigation</h3>
            <p className="text-sm text-muted-foreground">
              Automatically navigates to the selected language while preserving the current route.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Native Language Names</h3>
            <p className="text-sm text-muted-foreground">
              Displays language names in their native scripts for better user recognition.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Accessible</h3>
            <p className="text-sm text-muted-foreground">
              Built with accessibility in mind using Radix UI primitives.
            </p>
          </div>
        </div>
      </section>

      <section id="supported-languages" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Supported Languages
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="border-r border-border p-2 text-left">Code</th>
                <th className="border-r border-border p-2 text-left">Language</th>
                <th className="p-2 text-left">Native Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">en</td>
                <td className="border-r border-border p-2">English</td>
                <td className="p-2">English</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">vi</td>
                <td className="border-r border-border p-2">Vietnamese</td>
                <td className="p-2">Vietnamese</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">de</td>
                <td className="border-r border-border p-2">German</td>
                <td className="p-2">Deutsch</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">es</td>
                <td className="border-r border-border p-2">Spanish</td>
                <td className="p-2">Español</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">fr</td>
                <td className="border-r border-border p-2">French</td>
                <td className="p-2">Français</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">ja</td>
                <td className="border-r border-border p-2">Japanese</td>
                <td className="p-2">日本語</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">ko</td>
                <td className="border-r border-border p-2">Korean</td>
                <td className="p-2">한국어</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">th</td>
                <td className="border-r border-border p-2">Thai</td>
                <td className="p-2">ไทย</td>
              </tr>
              <tr className="border-b border-border">
                <td className="border-r border-border p-2 font-mono text-sm">zh-Hans</td>
                <td className="border-r border-border p-2">Chinese (Simplified)</td>
                <td className="p-2">简体中文</td>
              </tr>
              <tr>
                <td className="border-r border-border p-2 font-mono text-sm">zh-Hant</td>
                <td className="border-r border-border p-2">Chinese (Traditional)</td>
                <td className="p-2">繁體中文</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="customization" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Customization
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            To customize the available languages, modify the routing configuration and the renderTextLocale function:
          </p>
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`// Add or remove languages in routing.ts
export const routing = defineRouting({
  locales: ['en', 'es', 'fr'], // Your desired languages
  defaultLocale: 'en'
});

// Update the renderTextLocale function accordingly
const renderTextLocale = (locale: Locale) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'es':
      return 'Español';
    case 'fr':
      return 'Français';
    default:
      return 'English';
  }
};`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
