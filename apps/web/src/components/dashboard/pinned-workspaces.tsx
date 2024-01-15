"use client";
import { useState } from "react";
import PinnedWorkspaceCard from "./pinned-workspace-card";

import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

export default function PinnedWorkspaces() {
  const data = [
    {
      id: 1,
      title: "Luminate",
      description: "A cloud based IDE.",
      language: "TypeScript",
      stars: 2,
    },
    {
      id: 2,
      title: "NoteUp",
      description: "A note taking web app.",
      language: "TypeScript",
      stars: 1,
    },
  ];
  const [users, setUsers] = useState(data);
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setUsers((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over?.id);
      const newUsers = [...users];
      newUsers.splice(oldIndex, 1);
      newUsers.splice(newIndex, 0, users[oldIndex]);
      return newUsers;
    });
  };
  return (
    <div className="">
      <h1 className="text-lg font-semibold">Pinned Workspaces</h1>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={users} strategy={rectSortingStrategy}>
            {users.map((user) => (
              <PinnedWorkspaceCard key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
