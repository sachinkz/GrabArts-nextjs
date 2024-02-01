"use client"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"
import CommentSection from "../artistHome/comment-section"
import { ScrollArea } from "../ui/scroll-area"


interface PostDisplayModalProps {
    postUrl: string
    isVideo: boolean
    postId:string
}




export function PostDisplayModal({ postUrl, isVideo ,postId}: PostDisplayModalProps) {

    const videoUrl = '/video.mp4'

    return (
        <Dialog>
            <DialogTrigger asChild>

                {!isVideo && (<Image className="w-full rounded-md mt-2" src={postUrl} width={400} height={400} alt="postImage"/>)}
                    
            </DialogTrigger>
            <DialogContent className="max-sm:w-[325px] p-2 flex justify-center pt-10 h-screen w-full">
                <ScrollArea className="pr-3 m-1 w-full">
                    <Image src={postUrl} width={400} height={400} alt="post-image" className="object-contain mb-5 w-full max-h-[500px] mt-10" />
                    <div className="flex gap-3 my-3 ml-2">
                        <Heart className="text-red-500 " />
                        <Share2 />
                    </div>
                    <CommentSection postId={postId} />
                </ScrollArea>

            </DialogContent>

        </Dialog>
    )
}
