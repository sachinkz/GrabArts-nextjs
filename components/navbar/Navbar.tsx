"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { SideNavDrawer } from "./SideNavDrawer";
import { ModeToggle } from "../ui/Mode-toggle";
import { Input } from "../ui/input";
import { LoggedUserTypes, useProfileContext } from "../providers/profile-provider";
import { useContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";


interface NavbarProps {
    onLandingpage?: boolean;
    onShop?: boolean;
}

const Navbar = ({ onLandingpage, onShop }: NavbarProps) => {

    const [profile, setProfile] = useState<LoggedUserTypes>()


    useEffect(() => {
        let data = localStorage.getItem("profile")
        if (data) {
            const pro = JSON.parse(data)
            if (pro) {
                setProfile(pro)
            }
        }
    }, [])


    return (
        <div className=" z-50 w-full h-14 border-b flex items-center fixed bg-background top-0 left-0 max-md:px-5 max-sm:px-2 px-10">
            <div className="flex items-center w-full">
                {onLandingpage &&
                    <>
                       <Link href={'/'}> <h3 className="text-xl font-semibold mr-5">
                            GrabArts
                        </h3></Link>
                        {!profile?._id && (
                            <>
                                <Link href="/shop/artist"><Button variant="ghost">Login</Button></Link>
                                <Link className="max-md:hidden" href="/shop/artist"><Button variant="ghost">Signup</Button></Link>
                            </>
                        )}
                        <Link className="max-md:hidden" href="/shop"><Button variant="ghost">Purchase Art</Button></Link>
                        <Link className="max-md:hidden" href="/artist"><Button variant="ghost">Artists</Button></Link>
                        <ModeToggle />
                        <div className="ml-auto">
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </>
                }
                {onShop && (
                    <>
                        <Link href={"/shop"}><h3 className="text-xl font-semibold mr-5">
                            GrabArts
                        </h3></Link>

                        <Link className="max-md:hidden" href="/artist"><Button variant="ghost">Im an Artist</Button></Link>
                        <Link className="max-md:hidden" href="/shop/allorders"><Button variant="ghost">Orders</Button></Link>
                        <div className="ml-auto w-fit flex gap-3">
                            <div className="flex w-full max-w-sm items-center space-x-2 max-md:hidden">
                                <Input type="text" placeholder="Search an artist" />
                                <Button variant="secondary" type="submit">Search</Button>
                            </div>
                            <ModeToggle />
                            <UserButton afterSignOutUrl="/" />
                            {!profile?._id && (
                                <>
                                    <Link href="/shop/artist"><Button variant="ghost">Login</Button></Link>
                                    <Link className="max-md:hidden" href="/shop/artist"><Button variant="ghost">Signup</Button></Link>
                                </>
                            )}
                            <SideNavDrawer onShop />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
