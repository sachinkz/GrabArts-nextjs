import React, { useState } from 'react'
import { Separator } from '../ui/separator'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { ImageDownIcon, MenuIcon, PlayCircle, Search } from 'lucide-react'
import { Input } from '../ui/input'
import CreatePostModal from '../modals/create-post-modal'

const WhatsOnYourMind = ({toggleSidebarVisibility,showSidebar}:{toggleSidebarVisibility:()=>void,showSidebar:boolean}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div id='postDiv' className="h-56  z-20 bg-background flex flex-col items-center border rounded-lg border-secondary mx-3 w-[95%]">
            <div className="w-full max-sm:bg-background max-sm:z-30 bg-secondary max-sm:fixed max-sm:top-0 max-sm:left-0 relative h-[58px] flex justify-center items-center">
                <MenuIcon onClick={toggleSidebarVisibility} className={` hidden absolute left-2 ${!showSidebar && "max-md:block"}`}/>
                <div className='w-full space-x-2  flex justify-center mr-10 ml-10 max-md:ml-14 items-center'>
                    <Input placeholder='search for artists . . .' className='h-full focus-visible:ring-0 focus-visible:ring-offset-0'/>
                    <Button variant="outline" className='h-full'><Search className=' h-5 w-5 text-foreground/50'/></Button>
                </div>
            </div>
            <div className="w-full h-full flex-col px-5 justify-around  flex items-center">
                <div className="w-full relative">
                    <Textarea placeholder="share your thoughts..." className="placeholder:text-foreground/50 bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0 " />
                    <Button className="absolute bottom-2 right-2" variant='default'>Post</Button>
                </div>
                <div onClick={()=>setIsModalOpen(true)} className="w-full flex">
                    <CreatePostModal isOpen={isModalOpen} closeModal={setIsModalOpen} location='onTopImage'/>
                    <CreatePostModal isOpen={isModalOpen} closeModal={setIsModalOpen} location='onTopVideo'/>
                </div>
            </div>
        </div>
    )
}

export default WhatsOnYourMind