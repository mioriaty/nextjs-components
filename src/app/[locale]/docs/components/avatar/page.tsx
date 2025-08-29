'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/libs/components/ui/avatar';

export default function AvatarPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Avatar
        </h1>
        <p className="text-xl text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <a
          href="https://github.com/your-repo/avatar"
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
          <div className="flex items-center justify-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      <section id="installation" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <code className="text-sm">
            pnpm add @radix-ui/react-avatar
          </code>
        </div>
      </section>

      <section id="usage" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="text-sm overflow-x-auto">
{`import { Avatar, AvatarFallback, AvatarImage } from '@/libs/components/ui/avatar';

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`}
          </pre>
        </div>
      </section>

      <section id="examples" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Default</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Fallback</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://broken-image-url.png" alt="Broken" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`<Avatar>
  <AvatarImage src="https://broken-image-url.png" alt="Broken" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Different Sizes</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-sm">CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-lg">CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`<Avatar className="h-6 w-6">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback className="text-xs">CN</AvatarFallback>
</Avatar>

<Avatar className="h-8 w-8">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback className="text-sm">CN</AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback className="text-lg">CN</AvatarFallback>
</Avatar>`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Group of Avatars</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <div className="flex -space-x-2">
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
                    <AvatarFallback>NJ</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>+2</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <pre className="text-sm overflow-x-auto">
{`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
    <AvatarFallback>NJ</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+2</AvatarFallback>
  </Avatar>
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="props" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          API Reference
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Avatar</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="border-r border-border p-2 text-left">Prop</th>
                    <th className="border-r border-border p-2 text-left">Type</th>
                    <th className="border-r border-border p-2 text-left">Default</th>
                    <th className="p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">className</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">AvatarImage</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="border-r border-border p-2 text-left">Prop</th>
                    <th className="border-r border-border p-2 text-left">Type</th>
                    <th className="border-r border-border p-2 text-left">Default</th>
                    <th className="p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">src</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">The image source URL</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">alt</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Alternative text for the image</td>
                  </tr>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">className</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">AvatarFallback</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="border-r border-border p-2 text-left">Prop</th>
                    <th className="border-r border-border p-2 text-left">Type</th>
                    <th className="border-r border-border p-2 text-left">Default</th>
                    <th className="p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">className</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="accessibility" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Avatar component is built with accessibility in mind:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Always provide meaningful alt text for the AvatarImage</li>
            <li>The fallback content should be descriptive (e.g., user initials)</li>
            <li>Use appropriate color contrast for fallback backgrounds</li>
            <li>Consider using aria-label on the Avatar for screen readers when needed</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
