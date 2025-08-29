import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Component Library
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of reusable components built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <Link
          href="/docs/installation"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          Get Started
        </Link>
        <Link
          href="/docs/components/animate-tooltip"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          View Components
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
        <div className="group relative rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-primary-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Animate Tooltip</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Beautiful animated tooltips with customizable positioning and smooth transitions.
          </p>
          <Link href="/docs/components/animate-tooltip" className="absolute inset-0" />
        </div>

        <div className="group relative rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-primary-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Select Language</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Language selector component with internationalization support.
          </p>
          <Link href="/docs/components/select-language" className="absolute inset-0" />
        </div>

        <div className="group relative rounded-lg border p-6 hover:shadow-md transition-shadow">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-primary-foreground"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Avatar</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            User avatar component with fallback support and customizable styling.
          </p>
          <Link href="/docs/components/avatar" className="absolute inset-0" />
        </div>
      </div>

      <div className="pt-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">TypeScript First</h3>
            <p className="text-sm text-muted-foreground">
              Built with TypeScript for better developer experience and type safety.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Accessible</h3>
            <p className="text-sm text-muted-foreground">
              Components follow accessibility best practices and ARIA guidelines.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Customizable</h3>
            <p className="text-sm text-muted-foreground">
              Easily customizable with Tailwind CSS and CSS variables.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Modern</h3>
            <p className="text-sm text-muted-foreground">
              Built with modern React patterns and the latest web standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
