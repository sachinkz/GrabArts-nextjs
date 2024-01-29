import {Menu} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";


interface SideNavbarProps {
    onLandingpage?: boolean;
    onShop?: boolean;
    onArtist?: boolean;
}

export function SideNavDrawer({ onLandingpage, onShop, onArtist }: SideNavbarProps) {
    return (
        <div className="max-md:block hidden">
            <Drawer >
                <DrawerTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="flex ml-auto mr-auto w-full my-3 max-w-sm items-center space-x-2 max:md-hidden">
                        <Input type="text" placeholder="Search an artist" />
                        <Button variant="secondary" type="submit">Search</Button>
                    </div>
                    <Separator />
                    <Button variant="ghost" className="mr-auto px-10">Im an Artist</Button>
                    <Separator />
                    <Button variant="ghost" className="mr-auto px-10">Orders</Button>
                    <Separator />
                    <Button variant="ghost" className="mr-auto px-10">Logout</Button>
                    <Separator />
                    <DrawerFooter>
                        <DrawerClose>
                            <Button variant="secondary">close</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
