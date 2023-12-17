import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "./icon";
import Image from "next/image";
import Link from "next/link";

export default function SidebarMenu() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-md border border-blueGray p-2 transition-colors duration-300 ease-in-out hover:bg-blueGray/50">
        <Icons.menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Image src={"/logo.svg"} width={32} height={32} alt="logo" />
          </SheetTitle>
          <div className="">
            <Link href="/" className="flex items-center gap-2">
              <Icons.home className="h-4 w-4" />
              <h1>Dashboard</h1>
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
