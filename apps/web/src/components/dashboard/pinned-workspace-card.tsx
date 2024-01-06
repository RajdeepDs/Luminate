import { Icons } from "@repo/ui/icons";

import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export default function PinnedWorkspaceCard({ user }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      //   key={user.id}
      className="w-full cursor-default rounded-lg border border-blueGray bg-gradient-to-br from-gray/30 from-20% to-blueGray/30 to-80% p-5"
    >
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <Icons.box className="h-4 w-4" />
          <h1 className="text-base hover:cursor-pointer hover:underline">
            {user.title}
          </h1>
        </div>

        <Icons.gripVertical
          className="h-4 w-4 cursor-grab active:cursor-grabbing"
          {...listeners}
        />
      </div>
      <p className="mt-1 font-extralight">{user.description}</p>
      <div className="mt-5 flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-600" />
          <p className="text-sm font-extralight">{user.language}</p>
        </div>
        <div className="flex items-center gap-1">
          <Icons.star className="h-4 w-4" />
          <span className="text-sm font-extralight">{user.stars}</span>
        </div>
      </div>
    </div>
  );
}
