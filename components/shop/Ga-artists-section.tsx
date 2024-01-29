import Image from "next/image";
import { Button } from "../ui/button";
import { User } from "lucide-react";

const GrabArtsArtistsSection = () => {
    return (
        <div className='w-full flex flex-col pb-5 my-10 '>
            <h1 className='text-xl mb-10 mt-5 font-bold text-center '>Grab Art's Artists</h1>
            <div className="flex justify-around max-xl:justify-between max-lg:justify-normal gap-5 max-xl:whitespace-nowrap max-xl:overflow-x-scroll">
                <div className="min-w-[200px] min-h-[240px] shadow-lg relative">
                    <Image className="min-w-[200px] rounded-lg object-cover h-[200px]" src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" width={200} height={200} alt="artist-profile" />
                    <div className="w-full flex justify-between items-center p-2 absolute bottom-1 bg-background left-0">
                        <h3 className="font-semibold capitalize">Devon Rodreguez</h3>
                        <Button className="w-8 h-8 " variant="outline" size="icon"><User className="w-4 h-4" /></Button>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[240px] shadow-lg relative">
                    <Image className="min-w-[200px] rounded-lg object-cover h-[200px]" src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" width={200} height={200} alt="artist-profile" />
                    <div className="w-full flex justify-between items-center p-2 absolute bottom-1 bg-background left-0">
                        <h3 className="font-semibold capitalize">Devon Rodreguez</h3>
                        <Button className="w-8 h-8 " variant="outline" size="icon"><User className="w-4 h-4" /></Button>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[240px] shadow-lg relative">
                    <Image className="min-w-[200px] rounded-lg object-cover h-[200px]" src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" width={200} height={200} alt="artist-profile" />
                    <div className="w-full flex justify-between items-center p-2 absolute bottom-1 bg-background left-0">
                        <h3 className="font-semibold capitalize">Devon Rodreguez</h3>
                        <Button className="w-8 h-8 " variant="outline" size="icon"><User className="w-4 h-4" /></Button>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[240px] shadow-lg relative">
                    <Image className="min-w-[200px] rounded-lg object-cover h-[200px]" src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" width={200} height={200} alt="artist-profile" />
                    <div className="w-full flex justify-between items-center p-2 absolute bottom-1 bg-background left-0">
                        <h3 className="font-semibold capitalize">Devon Rodreguez</h3>
                        <Button className="w-8 h-8 " variant="outline" size="icon"><User className="w-4 h-4" /></Button>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[240px] shadow-lg relative">
                    <Image className="min-w-[200px] rounded-lg object-cover h-[200px]" src="https://vanitystardom.com/wp-content/uploads/2020/10/119159647_670561886895519_7081116251120712221_n-768x960.jpg" width={200} height={200} alt="artist-profile" />
                    <div className="w-full flex justify-between items-center p-2 absolute bottom-1 bg-background left-0">
                        <h3 className="font-semibold capitalize">Devon Rodreguez</h3>
                        <Button className="w-8 h-8 " variant="outline" size="icon"><User className="w-4 h-4" /></Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GrabArtsArtistsSection;