
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HeartFilledIcon } from "@radix-ui/react-icons"
import { Heart } from "lucide-react"
import Image from "next/image"

export function ImageDisplayModal({ imgUrl }: { imgUrl: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image alt="postimage" src={imgUrl} width={200} height={200} className="w-[250px] h-[250px] hover:scale-105 transition-transform ease-in-out duration-500 cursor-pointer aspect-square max-sm:w-[120px] max-sm:h-[120px] object-cover rounded-lg" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-[500px]">
                <Image src={imgUrl} width={400} height={400} alt="post-image" className="object-contain w-[700px] mt-10" />
                <DialogFooter>
                    <div className="flex items-center gap-2">
                        <span><HeartFilledIcon className="w-5 h-5 text-red-500"/></span>
                        <p>600 likes</p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
