import Link from "next/link";
import { Button } from "../ui/button";
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import { SideNavDrawer } from "./SideNavDrawer";
import { ModeToggle } from "../ui/Mode-toggle";
import { Input } from "../ui/input";
import { useProfileContext } from "../providers/profile-provider";
import { useContext } from "react";


interface NavbarProps {
    onLandingpage?: boolean;
    onShop?: boolean;
}

const Navbar = ({ onLandingpage, onShop}: NavbarProps) => {

    

    const isAuthenticated = true

    return (
        <div className=" z-50 w-full h-14 border-b flex items-center fixed bg-background top-0 left-0 max-md:px-5 max-sm:px-2 px-10">
            <div className="flex items-center w-full">
                <h3 className="text-xl font-semibold mr-5">
                    GrabArts
                </h3>
                {onLandingpage &&
                    <>
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Login</Button></Link>
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Signup</Button></Link>
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Purchase Art</Button></Link>
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Artists</Button></Link>
                        <ModeToggle />
                    </>
                }
                {onShop && (
                    <>
                        {!isAuthenticated && (
                            <>
                                <Link href="/shop/auth"><Button variant="ghost">Login</Button></Link>
                                <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Signup</Button></Link>
                            </>
                        )}
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Im an Artist</Button></Link>
                        <Link className="max-md:hidden" href="/shop/order/sdf"><Button variant="ghost">Orders</Button></Link>
                        <Link className="max-md:hidden" href="/shop/auth"><Button variant="ghost">Logout</Button></Link>
                        <div className="ml-auto w-fit flex gap-3">
                            <div className="flex w-full max-w-sm items-center space-x-2 max-md:hidden">
                                <Input type="text" placeholder="Search an artist" />
                                <Button variant="secondary" type="submit">Search</Button>
                            </div>
                            <ModeToggle />
                            <Avatar>
                                <AvatarImage src="https://i.postimg.cc/W3zH70Jb/grabartslogo.png" alt="@shadcn" />
                                <AvatarFallback>Profile</AvatarFallback>
                            </Avatar>
                            <SideNavDrawer onShop />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
