"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ActivityCalendar, { Activity } from "react-activity-calendar";

export default function CodeTiles() {
  const data: Activity[] = [
    {
      date: "2023-01-01",
      count: 2,
      level: 1,
    },
    {
      date: "2023-12-31",
      count: 16,
      level: 4,
    },
  ];
  return (
    <div>
      <h1 className="text-lg font-semibold">Code Tiles</h1>
      <div className="mt-4 rounded-lg border border-blueGray p-4">
        <div className="flex items-start justify-end">
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
        <div className="mt-5 flex h-[200px] justify-center rounded-md">
          <ActivityCalendar
            data={data}
            showWeekdayLabels={true}
            hideMonthLabels={false}
            theme={{
              light: ["#ffffff", "#CEB6FF", "#A57AFC", "#9159FF", "#7532FC"],
            }}
            blockSize={12}
            blockMargin={6}
          />
        </div>
        <div className="mt-2 h-[200px] border-t border-blueGray bg-transparent"></div>
      </div>
    </div>
  );
}
