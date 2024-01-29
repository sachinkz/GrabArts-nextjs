
import { TopAlert } from '@/components/navbar/TopAlert'
import EachSection from '@/components/shop/EachSection'
import GrabArtsArtistsSection from '@/components/shop/Ga-artists-section'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'



const ShopHome = () => {
  return (
    <div className='mt-28'>
      <div className='w-full  '>
        <div className='clip-diagonal pb-36 bg-background w-full p-3 flex flex-col justify-center items-center text-center gap-10'>
          <TopAlert content={"🎉 start exploring our talented artists"} />
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Find your favourite artist and order a custom artwork
          </h1>
          <h3 className="text-xl font-semibold tracking-tight">
            Each artists have their own unique styles, Check out their previous works and find who does the work as you desired.
          </h3>
          <div className='flex gap-5'>
            <Button variant='outline' size="default">Join as an Artist</Button>
            <Button variant='outline' size="default">Purchase Art</Button>
          </div>
        </div>
      </div>
      <Separator/>
      <EachSection sectionName='TopArtists' />
      <Separator/>
      <GrabArtsArtistsSection />
      <Separator/>
      <EachSection sectionName='Verified Artists' />
    </div>
  )
}

export default ShopHome