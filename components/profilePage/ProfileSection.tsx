"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingBasket, UserPlus, UserPlus2, UserPlus2Icon, VerifiedIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { PricingModal } from "./Pricing-modal";
import { UserButton } from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export type ProfileSectionProps = {
    artistData?: {
        _id: string,
        userId: string,
        name: string,
        email: string,
        imageUrl: string | undefined,
        reviews: {}[],
        isVerified: boolean,
        isTopten: boolean,
        posts: {
            _id: string,
            caption: string,
            postUrl: string,
            isVideo: false,
            userId: string,
            comments: [],
            likes: string[],
            createdAt: string
        }[]
        followers: string[],
        following: string[],
        createdAt: string,
        updatedAt: string,
        works: {
            _id: string,
            caption: string,
            postUrl: string,
            isVideo: false,
            userId: string,
            comments: [],
            likes: string[],
            createdAt: string
        }[]
    }
}

const ProfileSection = ({ artistData }: ProfileSectionProps) => {




    return (
        <div className="w-full  min-h-[300px] relative">
            <div className="-z-10 w-full bg-primary min-h-[300px]  clip-diagonal absolute top-0 left-0"></div>
            <div className="z-10 flex max-md:items-center max-md:flex-col-reverse w-full">
                <div className="flex h-[300px] max-md:w-full text-background flex-col w-[60%] justify-center gap-8 items-center">
                    <div className="flex items-center gap-3">
                        {artistData?.isVerified && <Badge className="h-8 max-md:w-5 max-md:h-5 max-md:mt-1 shadow-lg mt-2 w-8 p-0 flex justify-center items-center" variant="secondary">
                            <span><VerifiedIcon className="text-4xl text-blue-500" /></span>
                        </Badge>}
                        <h1 className="text-5xl capitalize font-bold max-md:text-4xl max-sm:text-2xl">{artistData?.name}</h1>
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <Button className="max-md:mt-0 max-sm:h-6 max-sm:ml-2 max-sm:w-6 mt-2 ml-5 hover:scale-110 shadow-md shadow-background/50 h-8 w-8 text-background font-extrabold p-1" variant="default" size="icon"><UserPlus2Icon className="" /></Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Follow artist</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="flex max-md:mt-10 max-md:shadow-none shadow-md px-10  max-md:text-foreground justify-evenly max-sm:gap-7  gap-10 py-2">
                        <div><span className="font-semibold">{artistData?.followers.length}</span><p> followers</p></div>
                        <div><span className="font-semibold">{artistData?.following.length}</span><p> following</p></div>
                        <div><span className="font-semibold">{artistData?.posts.length}</span><p> Posts</p></div>
                        <div><span className="font-semibold">{artistData?.works?.length}</span><p> works</p></div>
                    </div>
                    <div className="flex gap-5">
                        <PricingModal />
                        <Button variant="secondary"><ShoppingBasket className="h-4 w-4 mr-2" /> Order work</Button>
                    </div>
                </div>
                <div className="w-[40%] max-md:w-full max-md:justify-center  max-md:h-40 flex justify-start max-lg:justify-center items-center h-[250px]">
                    {artistData?.imageUrl && <Image className="shadow-md bg-secondary shadow-black rounded-full h-36 w-36 object-cover" alt="prifleImg" width={200} height={200}
                        src={artistData?.imageUrl} />}
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;