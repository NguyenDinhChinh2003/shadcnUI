"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2025",
      read: true,
    },
    {
      text: "This is a notification 2",
      date: "02-01-2025",
      read: false,
    },
  ])
  
  return (
    <div className="grid grid-cols-2 gap-4 border-b p-4">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <div className={`h-3 w-3 rounded-full my-1 ${notifications ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
              <BellIcon className="h-4 w-4"></BellIcon>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="p-1 cursor-pointer hover:bg-neutral-50 transition"
              >
                <div
                  className={`py-2 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <p>{item.text}</p>
                <p>{item.date}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
