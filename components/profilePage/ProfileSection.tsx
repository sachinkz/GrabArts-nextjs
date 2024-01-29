import Image from "next/image";
import { Button } from "../ui/button";
import { VerifiedIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { PricingModal } from "./Pricing-modal";

const ProfileSection = () => {
    return (
        <div className="w-full  min-h-[300px] relative">
            <div className="-z-10 w-full bg-primary min-h-[300px] clip-diagonal absolute top-0 left-0"></div>
            <div className="z-10 flex max-md:items-center max-md:flex-col-reverse w-full">
                <div className="flex h-[300px] max-md:w-full text-background flex-col w-[60%] justify-center gap-8 items-center">
                    <div className="flex items-center gap-2">
                        <Badge className="h-8 max-md:w-5 max-md:h-5 max-md:mt-1 shadow-lg mt-2 w-8 p-0 flex justify-center items-center" variant="secondary">
                            <span><VerifiedIcon className="text-4xl text-blue-500" /></span>
                        </Badge>
                        <h1 className="text-5xl font-bold max-md:text-4xl max-sm:text-2xl">Rovan Rodreguez</h1>
                    </div>
                    <div className="flex max-md:mt-10 max-md:shadow-none shadow-md px-10  max-md:text-foreground justify-evenly  gap-14 py-2">
                        <div><span className="font-semibold">12k</span><p> followers</p></div>
                        <div><span className="font-semibold">18</span><p> Posts</p></div>
                        <div><span className="font-semibold">28</span><p> works</p></div>
                    </div>
                    <div className="flex gap-5">
                        <PricingModal />
                        <Button variant="secondary">Order work</Button>
                    </div>
                </div>
                <div className="w-[40%] max-md:w-full max-md:justify-center  max-md:h-40 flex justify-start max-lg:justify-center items-center h-[250px]">
                    <Image className="shadow-md  shadow-black rounded-full h-36 w-36 object-cover" alt="prifleImg" width={200} height={200}
                        src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" />
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;