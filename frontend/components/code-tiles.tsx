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
      <div className="mt-4 rounded-lg border border-blueGray p-4">
        <div className="flex items-start justify-between">
          <h1>214 contributions in the last year.</h1>
          <div className="">
            <Select>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="2023" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-5 h-[200px] rounded-md bg-gray"></div>
        <div className="mt-2 h-[200px] border-t border-blueGray bg-transparent"></div>
      </div>
    </div>
  );
}
