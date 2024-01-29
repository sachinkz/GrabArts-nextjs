
import PostsAndWorks from "@/components/profilePage/PostsAndWorks";
import ProfileSection from "@/components/profilePage/ProfileSection";
import ReviewsSection from "@/components/profilePage/ReviewsSection";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {


    return ( 
        <div className="w-full mt-14 min-h-screen flex flex-col items-center">
            <ProfileSection/>
            <PostsAndWorks/>
            <Separator className="my-10"/>
            <ReviewsSection/>
        </div>
     );
}
 
export default ProfilePage;