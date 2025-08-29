'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/libs/components/ui/select';
import { useState } from 'react';

export default function SelectPage() {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1>
        <p className="text-xl text-muted-foreground">
          Displays a list of options for the user to pick from—triggered by a button.
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <a
          href="https://github.com/your-repo/select"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
        >
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Edit on GitHub
        </a>
      </div>

      <section id="preview" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border p-8">
          <div className="flex items-center justify-center">
            <Select value={value} onValueChange={setValue}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section id="installation" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <div className="rounded-lg bg-muted p-4">
          <code className="text-sm">pnpm add @radix-ui/react-select</code>
        </div>
      </section>

      <section id="usage" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="text-sm overflow-x-auto">
            {`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/libs/components/ui/select';

export function Example() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  );
}`}
          </pre>
        </div>
      </section>

      <section id="examples" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Examples</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Default</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">With Scrolling</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <Select>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Select a timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Disabled</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center space-x-4">
                <Select disabled>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">With Label</h3>
            <div className="rounded-lg border p-8">
              <div className="flex items-center justify-center">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label
                    htmlFor="fruit-select"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Choose your favorite fruit
                  </label>
                  <Select>
                    <SelectTrigger id="fruit-select">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="props" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">API Reference</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Select</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">value</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">The controlled value of the select</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">defaultValue</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">The default value when uncontrolled</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">onValueChange</td>
                    <td className="border-r border-border p-2 font-mono text-sm">{`(value: string) => void`}</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Callback when the value changes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">disabled</td>
                    <td className="border-r border-border p-2 font-mono text-sm">boolean</td>
                    <td className="border-r border-border p-2 font-mono text-sm">false</td>
                    <td className="p-2 text-sm">Whether the select is disabled</td>
                  </tr>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">required</td>
                    <td className="border-r border-border p-2 font-mono text-sm">boolean</td>
                    <td className="border-r border-border p-2 font-mono text-sm">false</td>
                    <td className="p-2 text-sm">Whether the select is required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">SelectTrigger</h3>
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
            <h3 className="text-lg font-medium mb-4">SelectValue</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">placeholder</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">Placeholder text when no value is selected</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">SelectItem</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">value</td>
                    <td className="border-r border-border p-2 font-mono text-sm">string</td>
                    <td className="border-r border-border p-2 font-mono text-sm">-</td>
                    <td className="p-2 text-sm">The value of the item</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">disabled</td>
                    <td className="border-r border-border p-2 font-mono text-sm">boolean</td>
                    <td className="border-r border-border p-2 font-mono text-sm">false</td>
                    <td className="p-2 text-sm">Whether the item is disabled</td>
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
        </div>
      </section>

      <section id="accessibility" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Accessibility</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">The Select component follows WAI-ARIA guidelines:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Supports keyboard navigation (Arrow keys, Enter, Escape)</li>
            <li>Proper ARIA attributes for screen readers</li>
            <li>Focus management when opening/closing</li>
            <li>Type-ahead functionality for quick selection</li>
            <li>Disabled state handling</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
