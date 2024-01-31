import qs from 'query-string'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios';


// let param: any = undefined;

export const useFeedQuery = (userId:string) => {

    
    const fetchFeeds = async ({pageParam=undefined}) => {
        
        const url = qs.stringifyUrl({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/artist/feeds`,
            query: {
                cursor:pageParam,
                userId: userId,
            }
        }, { skipNull: true })


        const res = await axios.get(url)
        return res.data
    }

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['feeds',userId],
        queryFn:fetchFeeds,
        getNextPageParam: (lastPage) =>lastPage?.nextCursor,
        initialPageParam:undefined,
    });

    return { data, fetchNextPage, hasNextPage, status, isFetchingNextPage }
}   