"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Feed } from "@/components/artistHome/data"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ArrowUp, Heart, LoaderIcon, MessageCircleDashedIcon, Share2, VerifiedIcon } from "lucide-react"
import WhatsOnYourMind from "./whats-on-your-mind"
import CommentSection from "./comment-section"
import { Button } from "../ui/button"
import { ElementRef, useEffect, useRef, useState } from "react"
import { PostDisplayModal } from "../modals/post-display-modal"
import VideoPlayer from "./video-player"
import { useProfileContext } from "../providers/profile-provider"
import { redirectToSignIn } from "@clerk/nextjs"
import { useFeedQuery } from "@/hooks/use-feeds-query"
import { useFeedScroll } from "@/hooks/use-feed-scroll"

interface MailListProps {
  items: Feed[];
  toggleSidebarVisibility: () => void;
  showSidebar: boolean;
}

interface FeedProps {
  _id: string;
  userId: {
    imageUrl: string
    isTopten: boolean
    isVerified: boolean
    name: string;
    userId: string;
  }
  name: string;
  openComments?: boolean;
  caption: string;
  postUrl: string;
  likes: string[];
  comments: string[];
  createdAt: string;
}


export function FeedsList({ toggleSidebarVisibility, showSidebar }: MailListProps) {

  const [feeds, setFeeds] = useState<FeedProps[]>([])
  const feedsDiv = useRef<ElementRef<"div">>(null)


  const handleCommentOpen = (id: string) => {

    const newFeeds: FeedProps[] = feeds?.map((feed: FeedProps) => {
      if (feed._id === id) {
        feed.openComments = !feed.openComments;
      }
      return feed
    })
    setFeeds(newFeeds)
  }

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, status } = useFeedQuery()


  useEffect(() => {
    if (data) {
      const arr: FeedProps[] = data?.pages.map((page: any) => page.items).flat();
      const dataArray: FeedProps[] = arr?.map((item) => {
        const newItem = { ...item, openComments: false }
        return newItem
      })
      setFeeds(dataArray)
    }
  }, [data])





  return (

    <ScrollArea ref={feedsDiv} className="relative max-md:min-w-[350px] w-[800px] max-md:w-full h-screen ">

      <WhatsOnYourMind showSidebar={showSidebar} toggleSidebarVisibility={toggleSidebarVisibility} />

      <div className="flex flex-col gap-10 p-4 ">

        {feeds?.map((item: any,i) => (
          <div className="bg-secondary/25 p-2 border border-secondary rounded-md" key={i}>
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.userId?.imageUrl} alt="@shadcn" />
                    <AvatarFallback>Profile</AvatarFallback>
                  </Avatar>
                  <div className="font-semibold max-sm:text-sm capitalize flex items-center gap-2">{item.userId?.name} {item.userId?.isVerified && <VerifiedIcon className=" h-4 w-4 text-blue-400" />}</div>
                </div>
              </div>

              <div className="text-xs ml-10 font-medium mt-2 max-sm:text-xs">{item.caption}</div>

            </div>

            <div className="w-full flex justify-center">
              <PostDisplayModal postId={item._id} isVideo={item.isVideo} postUrl={item.postUrl} />
              {item.isVideo && <VideoPlayer videoUrl={item.postUrl} />}
            </div>
            <div className="flex gap-3 my-3 ml-2">
              <Heart className="text-red-500 " />
              <MessageCircleDashedIcon className="cursor-pointer" onClick={() => handleCommentOpen(item._id)} />
              <Share2 />
            </div>
            {item.openComments && <CommentSection postId={item._id} />}
          </div>
        ))}

      </div>
      {(status === "success" && hasNextPage && !isFetchingNextPage) && <div className="h-60 flex flex-col gap-4 justify-center items-center">
        <p>load more</p>
        <Button onClick={() => fetchNextPage()} variant="outline">load more posts <ArrowUp /></Button>
      </div>}

      {(status === "pending" || isFetchingNextPage) && (
        <div className="h-60 flex gap-4 justify-center items-center">
          <p>Loading...</p>
          <LoaderIcon className="h-8 w-8 animate-spin" />
        </div>
      )}

      {status === "success" && !hasNextPage && (
        <div className="h-60 flex flex-col gap-4 justify-center items-center">
          <p>Nothing else here...</p>
          <a href="#postDiv"><Button variant="outline">go to top<ArrowUp /></Button></a>
        </div>
      )}
    </ScrollArea>
  )
}

