export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-xl text-muted-foreground">
          How to install and set up the component library in your project.
        </p>
      </div>

      <div className="space-y-8">
        <section id="requirements">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Requirements
          </h2>
          <div className="mt-4 space-y-2">
            <p className="text-muted-foreground">
              Before you begin, ensure you have the following installed:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Node.js 18.0 or later</li>
              <li>React 18.0 or later</li>
              <li>TypeScript 5.0 or later</li>
            </ul>
          </div>
        </section>

        <section id="installation">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Install Dependencies
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">
              Install the required dependencies using your preferred package manager:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Using pnpm (recommended)</h3>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    pnpm add @radix-ui/react-avatar @radix-ui/react-select @radix-ui/react-tooltip motion class-variance-authority clsx tailwind-merge
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Using npm</h3>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    npm install @radix-ui/react-avatar @radix-ui/react-select @radix-ui/react-tooltip motion class-variance-authority clsx tailwind-merge
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Using yarn</h3>
                <div className="rounded-lg bg-muted p-4">
                  <code className="text-sm">
                    yarn add @radix-ui/react-avatar @radix-ui/react-select @radix-ui/react-tooltip motion class-variance-authority clsx tailwind-merge
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="setup">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Setup
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Configure Tailwind CSS</h3>
              <p className="text-muted-foreground mb-2">
                Add the following to your <code className="text-sm bg-muted px-1 py-0.5 rounded">tailwind.config.js</code>:
              </p>
              <div className="rounded-lg bg-muted p-4">
                <pre className="text-sm overflow-x-auto">
{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [],
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. Add CSS Variables</h3>
              <p className="text-muted-foreground mb-2">
                Add the following CSS variables to your global CSS file:
              </p>
              <div className="rounded-lg bg-muted p-4">
                <pre className="text-sm overflow-x-auto">
{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted: 210 40% 98%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --ring: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --ring: 212.7 26.8% 83.9%;
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">3. Create Utility Functions</h3>
              <p className="text-muted-foreground mb-2">
                Create a utility file for class name merging:
              </p>
              <div className="rounded-lg bg-muted p-4">
                <pre className="text-sm overflow-x-auto">
{`// src/libs/utils/classnames.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="usage">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Usage
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">
              Once installed, you can start using the components in your project:
            </p>
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/libs/components/animate-tooltip';

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
