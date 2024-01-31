"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Feed } from "@/components/artistHome/data"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ArrowUp, Heart, MessageCircleDashedIcon, Share2 } from "lucide-react"
import WhatsOnYourMind from "./whats-on-your-mind"
import CommentSection from "./comment-section"
import { Button } from "../ui/button"
import { Fragment, useEffect, useState } from "react"
import { PostDisplayModal } from "../modals/post-display-modal"
import VideoPlayer from "./video-player"
import { useProfileContext } from "../providers/profile-provider"
import { redirectToSignIn } from "@clerk/nextjs"
import InfiniteScroll from 'react-infinite-scroll-component'
import { useFeedQuery } from "@/hooks/use-feeds-query"

interface MailListProps {
  items: Feed[];
  toggleSidebarVisibility: () => void;
  showSidebar: boolean;
}


export function FeedsList({ items, toggleSidebarVisibility, showSidebar }: MailListProps) {

  const [feeds, setFeeds] = useState([])
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

  const { profile } = useProfileContext()
  if (!profile) {
    redirectToSignIn()
  }

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useFeedQuery(profile._id)

useEffect(()=>{
  const itemsArray = data?.pages.map((page:any) => page.items).flat();
  console.log(itemsArray)
  setFeeds(itemsArray)
},[data])


  return (

    <ScrollArea id="scrollableDiv" className="relative max-md:min-w-[350px] w-[800px] max-md:w-full h-screen ">

      <WhatsOnYourMind showSidebar={showSidebar} toggleSidebarVisibility={toggleSidebarVisibility} />

      <div className="flex flex-col gap-10 p-4 ">

          <InfiniteScroll
            dataLength={feeds?.length} //This is important field to render the next data
            next={fetchNextPage}
            hasMore={hasNextPage}
            inverse={true}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {feeds?.map((item: any) => (

              <div className="bg-secondary/25 p-2 border border-secondary rounded-md" key={item._id}>
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

                  <div className="text-xs ml-10 font-medium mt-2 max-sm:text-xs">{item.caption}</div>

                </div>

                <div className="w-full flex justify-center">
                  <PostDisplayModal isVideo={item.isVideo} postUrl={item.postUrl} />
                  {item?.isVideo && <VideoPlayer videoUrl={item?.postUrl} />}
                </div>
                <div className="flex gap-3 my-3 ml-2">
                  <Heart className="text-red-500 " />
                  <MessageCircleDashedIcon className="cursor-pointer" onClick={() => handleCommentOpen(item.id)} />
                  <Share2 />
                </div>
                {item.openComments && <CommentSection />}
              </div>
            ))}
          </InfiniteScroll>
      </div>
      <div className="h-60 flex flex-col gap-4 justify-center items-center">
        <p>load more</p>
        <Button onClick={fetchNextPage} variant="outline">load more posts <ArrowUp /></Button>
      </div>
    </ScrollArea>
  )
}

