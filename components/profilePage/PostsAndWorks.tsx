import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ImageDisplayModal } from "../modals/Image-display-modal";


const posts = [
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
    "https://www.pencilperceptions.com/wp-content/uploads/2022/08/20220827_083319-scaled.jpg",
]

const works = [
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
    "https://i.ytimg.com/vi/xov0aoB3Wbg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ46F9ET4rXUDDxLFnNDfxvZfwWg",
]


const PostsAndWorks = () => {

    return (
        <Tabs defaultValue="works" className="w-full flex items-center gap-3 flex-col px-10 max-md:px-3">
            <TabsList className="grid w-[350px] mb-5 grid-cols-2">
                <TabsTrigger value="works">Works</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="works">
                <div className="grid w-full grid-cols-4 gap-5 max-xl:grid-cols-4 max-xs:gap-2 max-lg:grid-cols-3">
                    {works.map((url, i) => (
                        <ImageDisplayModal key={i} imgUrl={url} />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="posts">
                <div className="grid w-full grid-cols-4 gap-5 max-xl:grid-cols-4 max-xs:gap-2 max-lg:grid-cols-3">
                    {posts.map((url, i) => (
                        <ImageDisplayModal key={i} imgUrl={url} />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}

export default PostsAndWorks;