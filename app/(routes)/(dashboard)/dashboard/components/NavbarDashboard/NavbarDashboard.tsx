import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";

export function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
        <div className="block xl:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center">
            <Menu />
        </SheetTrigger>
        <SheetContent side="left">
            <SidebarRoutes />
        </SheetContent>
      </Sheet>
      </div>
    </nav>
  );
}