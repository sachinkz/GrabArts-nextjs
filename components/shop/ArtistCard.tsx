
import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "../ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface Artwork {
    artist: string
    art: string
}

const works: Artwork[] = [
    {
        artist: "Ornella Binni",
        art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Tom Byrom",
        art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
    {
        artist: "Vladimir Malyavko",
        art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
]

export function ArtistCard() {
    return (
        <Card className="w-fit max-w-[300px] bg-[#eeeeee] dark:bg-[#141414] dark:border-gray-800">
            <CardHeader className="p-0">
                <div className="flex items-center gap-2 ml-5 my-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                        <AvatarFallback>Profile pic</AvatarFallback>
                    </Avatar>
                    <CardTitle>Sachin k</CardTitle>
                </div>
                <div className="flex shadow-lg justify-evenly py-2 bg-secondary">
                    <div><span className="font-semibold">12k</span><p> followers</p></div>
                    <div><span className="font-semibold">18</span><p> Posts</p></div>
                    <div><span className="font-semibold">28</span><p> works</p></div>
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="whitespace-nowrap mt-5 w-[260px] rounded-md border-none">
                    <div className="flex w-max space-x-4 py-4">
                        {works.map((artwork: { artist: string, art: string }) => (
                            <figure key={artwork.artist} className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={artwork.art}
                                        alt={`Photo by ${artwork.artist}`}
                                        className="aspect-[1] rounded-lg h-[100px] w-[100px] object-cover"
                                        width={130} height={130}
                                    />
                                </div>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between mt-5">
                <Button variant="outline">Profile</Button>
                <Button>Order</Button>
            </CardFooter>
        </Card>
    )
}