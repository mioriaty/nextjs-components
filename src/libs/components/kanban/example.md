```tsx
import { KanbanBoard, KanbanCard, KanbanCards, KanbanHeader, KanbanProvider } from '@/libs/components/kanban';
import { Avatar, AvatarFallback, AvatarImage } from '@/libs/components/ui/avatar';
import { useState } from 'react';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const columns = [
  { id: uuid(), name: 'Planned', color: '#6B7280' },
  { id: uuid(), name: 'In Progress', color: '#F59E0B' },
  { id: uuid(), name: 'Done', color: '#10B981' }
];

const users = Array.from({ length: 4 })
  .fill(null)
  .map(() => ({
    id: uuid(),
    name: fullName(), // random full name
    image: avatar() // random avatar
  }));

const exampleFeatures = Array.from({ length: 20 })
  .fill(null)
  .map(() => ({
    id: uuid(),
    name: capitalize(company.buzzPhrase()), // random buzz phrase
    startAt: date.past({ years: 0.5, refDate: new Date() }), // random past date
    endAt: date.future({ years: 0.5, refDate: new Date() }), // random future date
    column: helpers.arrayElement(columns).id, // random column
    owner: helpers.arrayElement(users) // random user
  }));

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric'
});

const Example = () => {
  const [features, setFeatures] = useState(exampleFeatures);
  return (
    <KanbanProvider columns={columns} data={features} onDataChange={setFeatures}>
      {(column) => (
        <KanbanBoard id={column.id} key={column.id}>
          <KanbanHeader>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: column.color }} />
              <span>{column.name}</span>
            </div>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(feature: (typeof features)[number]) => (
              <KanbanCard column={column.id} id={feature.id} key={feature.id} name={feature.name}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="m-0 flex-1 font-medium text-sm">{feature.name}</p>
                  </div>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>{feature.owner.name?.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <p className="m-0 text-muted-foreground text-xs">
                  {shortDateFormatter.format(feature.startAt)} - {dateFormatter.format(feature.endAt)}
                </p>
              </KanbanCard>
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
};
```
