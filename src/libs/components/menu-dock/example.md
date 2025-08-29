```tsx
import { MenuDock, MenuDockItem } from '@/libs/components/menu-dock';
import { Briefcase, Calendar, Home, Settings, Shield } from 'lucide-react';

const defaultItems: MenuDockItem[] = [
  { label: 'home', icon: Home },
  { label: 'work', icon: Briefcase },
  { label: 'calendar', icon: Calendar },
  { label: 'security', icon: Shield },
  { label: 'settings', icon: Settings }
];

export default function Example() {
  return (
    <div className="flex items-center justify-center min-h-[120px] p-4">
      <MenuDock items={defaultItems} variant="compact" />
    </div>
  );
}
```
