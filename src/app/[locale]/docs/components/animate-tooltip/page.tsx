'use client';

import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/libs/components/animate-tooltip';
import { useState } from 'react';

export default function AnimateTooltipPage() {
  const [side, setSide] = useState<'top' | 'bottom' | 'left' | 'right'>('top');
  const [align, setAlign] = useState<'start' | 'center' | 'end'>('center');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Animate Tooltip
        </h1>
        <p className="text-xl text-muted-foreground">
          A beautiful animated tooltip component with customizable positioning and smooth transitions.
        </p>
      </div>

      <div className="flex items-center space-x-4 pt-4">
        <a
          href="https://github.com/your-repo/animate-tooltip"
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
          <TooltipProvider>
            <div className="flex items-center justify-center min-h-[200px]">
              <Tooltip side={side} align={align}>
                <TooltipTrigger>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Hover me
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is an animated tooltip!</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Customization</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Side</label>
              <select
                value={side}
                onChange={(e) => setSide(e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Align</label>
              <select
                value={align}
                onChange={(e) => setAlign(e.target.value as any)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-muted p-4">
          <code className="text-sm">
            pnpm add @radix-ui/react-tooltip motion
          </code>
        </div>
      </section>

      <section id="usage" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
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
      </section>

      <section id="examples" className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Examples
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Different Positions</h3>
            <div className="rounded-lg border p-8">
              <TooltipProvider>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                  <div className="flex flex-col items-center space-y-2">
                    <Tooltip side="top">
                      <TooltipTrigger>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                          Top
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Top tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Tooltip side="bottom">
                      <TooltipTrigger>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                          Bottom
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Bottom tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Tooltip side="left">
                      <TooltipTrigger>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                          Left
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Left tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Tooltip side="right">
                      <TooltipTrigger>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                          Right
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Right tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </TooltipProvider>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Rich Content</h3>
            <div className="rounded-lg border p-8">
              <TooltipProvider>
                <div className="flex justify-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                        Rich Content
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="space-y-2">
                        <p className="font-medium">User Profile</p>
                        <p className="text-sm text-muted-foreground">
                          This tooltip contains rich content with multiple elements.
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="text-xs">Online</span>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
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
            <h3 className="text-lg font-medium mb-4">TooltipProvider</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">openDelay</td>
                    <td className="border-r border-border p-2 font-mono text-sm">number</td>
                    <td className="border-r border-border p-2 font-mono text-sm">700</td>
                    <td className="p-2 text-sm">Delay before showing tooltip (ms)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">closeDelay</td>
                    <td className="border-r border-border p-2 font-mono text-sm">number</td>
                    <td className="border-r border-border p-2 font-mono text-sm">300</td>
                    <td className="p-2 text-sm">Delay before hiding tooltip (ms)</td>
                  </tr>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">transition</td>
                    <td className="border-r border-border p-2 font-mono text-sm">Transition</td>
                    <td className="border-r border-border p-2 font-mono text-sm">spring</td>
                    <td className="p-2 text-sm">Motion transition configuration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Tooltip</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">side</td>
                    <td className="border-r border-border p-2 font-mono text-sm">'top' | 'bottom' | 'left' | 'right'</td>
                    <td className="border-r border-border p-2 font-mono text-sm">'top'</td>
                    <td className="p-2 text-sm">Preferred side of the trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">sideOffset</td>
                    <td className="border-r border-border p-2 font-mono text-sm">number</td>
                    <td className="border-r border-border p-2 font-mono text-sm">14</td>
                    <td className="p-2 text-sm">Distance from trigger (px)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="border-r border-border p-2 font-mono text-sm">align</td>
                    <td className="border-r border-border p-2 font-mono text-sm">'start' | 'center' | 'end'</td>
                    <td className="border-r border-border p-2 font-mono text-sm">'center'</td>
                    <td className="p-2 text-sm">Alignment relative to trigger</td>
                  </tr>
                  <tr>
                    <td className="border-r border-border p-2 font-mono text-sm">alignOffset</td>
                    <td className="border-r border-border p-2 font-mono text-sm">number</td>
                    <td className="border-r border-border p-2 font-mono text-sm">0</td>
                    <td className="p-2 text-sm">Alignment offset (px)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">TooltipContent</h3>
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
                    <td className="border-r border-border p-2 font-mono text-sm">arrow</td>
                    <td className="border-r border-border p-2 font-mono text-sm">boolean</td>
                    <td className="border-r border-border p-2 font-mono text-sm">true</td>
                    <td className="p-2 text-sm">Whether to show the arrow</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
