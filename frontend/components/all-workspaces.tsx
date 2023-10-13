export default function AllWorkspaces() {
  return (
    <div className="flex w-[343px] flex-col space-y-3 rounded-lg bg-gray-100 px-3 py-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-medium">Workspace Title</h1>
        <p className="text-sm text-gray-400">Yesterday</p>
        {/* More Button */}
      </div>
      <p className="text-sm text-gray-600">Shared/Private</p>
    </div>
  );
}
