'use client';

import { KanbanContext, KanbanContextProps } from '@/libs/components/kanban/context';
import { KanbanItemProps } from '@/libs/components/kanban/types';
import { ScrollArea, ScrollBar } from '@/libs/components/ui/scroll-area';
import { cn } from '@/libs/utils/classnames';
import { SortableContext } from '@dnd-kit/sortable';
import { HTMLAttributes, ReactNode, useContext } from 'react';

export type KanbanCardsProps<T extends KanbanItemProps = KanbanItemProps> = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'id'
> & {
  children: (item: T) => ReactNode;
  id: string;
};

export const KanbanCards = <T extends KanbanItemProps = KanbanItemProps>({
  children,
  className,
  ...props
}: KanbanCardsProps<T>) => {
  const { data } = useContext(KanbanContext) as KanbanContextProps<T>;
  const filteredData = data.filter((item) => item.column === props.id);
  const items = filteredData.map((item) => item.id);

  return (
    <ScrollArea className="overflow-hidden">
      <SortableContext items={items}>
        <div className={cn('flex flex-grow flex-col gap-2 p-2', className)} {...props}>
          {filteredData.map(children)}
        </div>
      </SortableContext>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};
