'use-client'

import { icons, User, Mail, Inbox, Bell, Cookie, Logs, Settings, Wallet } from "lucide-react"

import UserItem from "./UserItems"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from './ui/command'

export default function Sidebar() {
    const listMenu = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <Wallet />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Logs />,
                    text: "Logs"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notifications"
                },
            ]
        },
    ]
    return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command>
                <CommandList>
                    {listMenu.map((menu: any, key: number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number) =>
                                <CommandItem key={optionKey}>{option.icon}{option.text}</CommandItem>
                            )}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </div>
        <div>Setting / Notification</div>
    </div>
}