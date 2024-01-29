"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Feed } from "@/components/artistHome/data"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ArrowUp, Heart, MessageCircleDashedIcon, Share2 } from "lucide-react"
import WhatsOnYourMind from "./whats-on-your-mind"
import CommentSection from "./comment-section"
import { Button } from "../ui/button"
import { useState } from "react"
import { PostDisplayModal } from "../modals/post-display-modal"
import VideoPlayer from "./video-player"


interface MailListProps {
  items: Feed[];
  toggleSidebarVisibility: () => void;
  showSidebar:boolean;
}


export function FeedsList({ items, toggleSidebarVisibility,showSidebar }: MailListProps) {


  

  const [feeds, setFeeds] = useState(items)
  const [playStatus, setPlayStatus] = useState(false)

  const handleCommentOpen = (id: string) => {

    const newFeeds = feeds.map(feed => {
      if (feed.id === id) {
        feed.openComments = true;
      }
      return feed
    })
    setFeeds(newFeeds)
  }


  return (

    <ScrollArea className="relative max-md:min-w-[350px] w-[800px] max-md:w-full h-screen ">

      <WhatsOnYourMind showSidebar={showSidebar} toggleSidebarVisibility={toggleSidebarVisibility} />

      <div className="flex flex-col gap-10 p-4 ">
        {feeds.map((item) => (
          <div className="bg-secondary/25 p-2 border border-secondary rounded-md" key={item.id}>

            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                  <div className="font-semibold max-sm:text-sm">{item.name}</div>
                </div>
              </div>

              <div className="text-xs font-medium mt-2 max-sm:text-xs">{item.caption}</div>

            </div>

            <div className="w-full flex justify-center">
              <PostDisplayModal isVideo={item?.video} postUrl={item?.postUrl} />
              {item?.video && <VideoPlayer videoUrl={item?.postUrl}/>}
            </div>
            <div className="flex gap-3 my-3 ml-2">
              <Heart className="text-red-500 " />
              <MessageCircleDashedIcon className="cursor-pointer" onClick={() => handleCommentOpen(item.id)} />
              <Share2 />
            </div>
            {item.openComments && <CommentSection />}
          </div>
        ))}
      </div>
      <div className="h-60 flex flex-col gap-4 justify-center items-center">
        <p>end of feeds</p>
        <Button variant="outline">Go to Top <ArrowUp /></Button>
      </div>
    </ScrollArea>
  )
}

