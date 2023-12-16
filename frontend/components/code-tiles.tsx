import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CodeTiles() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Code Tiles</h1>
      <div className="border-blueGray mt-4 rounded-lg border p-4">
        <div className="flex items-start justify-between">
          <h1>214 contributions in the last year.</h1>
          <div className="">
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="2023" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">2022</SelectItem>
                <SelectItem value="dark">2021</SelectItem>
                <SelectItem value="system">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-5 h-[200px] rounded-md bg-gray"></div>
        <div className="border-blueGray mt-2 h-[200px] border-t bg-transparent"></div>
      </div>
    </div>
  );
}
