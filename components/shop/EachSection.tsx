
import React from 'react'
import { ArtistCard } from './ArtistCard'

interface EachSectionProps {
  sectionName: string;
}

const EachSection = ({sectionName}:EachSectionProps) => {
  return (
    <div className='w-full flex flex-col px-5 mt-10'>
      <h1 className='text-xl mb-10 font-bold text-center '>{sectionName}</h1>
      <div className='w-full mx-auto mb-10 grid max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center grid-cols-4 gap-y-10 gap-x-5'>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
        <ArtistCard/>
      </div>
    </div>
  )
}

export default EachSection