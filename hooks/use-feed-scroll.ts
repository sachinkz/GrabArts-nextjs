import { useEffect, useState } from "react";

type ChatScrollProps = {
    topRef: React.RefObject<HTMLDivElement>
    bottomRef: React.RefObject<HTMLDivElement>
    shouldLoadMore: boolean;
    loadMore: () => void;
}

export const useFeedScroll = ({
    topRef, shouldLoadMore, loadMore
}: ChatScrollProps) => {


     useEffect(() => {
        const feedDiv = topRef?.current;
        console.log(feedDiv)
        const handleScroll = () => {
            const scrollHeight = feedDiv?.scrollHeight;
            const scrollTop = feedDiv?.scrollTop;
            const clientHeight = feedDiv?.clientHeight;
            console.log({scrollHeight,scrollTop,clientHeight})
            //@ts-ignore
            if (scrollHeight - scrollTop === clientHeight && shouldLoadMore) {
                loadMore();
            }
        };

        feedDiv?.addEventListener("scroll", handleScroll);

        return () => feedDiv?.removeEventListener("scroll", handleScroll);
    }, [shouldLoadMore, loadMore, topRef]);

}