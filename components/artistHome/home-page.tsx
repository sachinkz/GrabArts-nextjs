"use client"
import { feeds } from "@/components/artistHome/data"
import ArtistSidebar from "@/components/artist-sidebar"
import { FeedsList } from "@/components/artistHome/feeds-list"
import { Separator } from "@/components/ui/separator"
import RightSection from "@/components/artistHome/right-section"
import { useEffect, useState } from "react"
import { LoggedUserTypes, useProfileContext } from "../providers/profile-provider"


export default function HomePage({ profile }: { profile?: LoggedUserTypes }) {



  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebarVisibility = () => {
    setShowSidebar(!showSidebar)
  }
  const { setProfile } = useProfileContext()
  useEffect(() => {
    // @ts-ignore
    setProfile(profile)
  }, [])

  return (
    <div className="min-h-screen max-h-screen px-24 max-xl:px-0">
      <div className="flex">
        <ArtistSidebar
          toggleSidebarVisibility={toggleSidebarVisibility}
          showSidebar={showSidebar}
          userId={profile?.userId}
        />
        <Separator orientation="vertical" />
        <FeedsList
          showSidebar={showSidebar}
          toggleSidebarVisibility={toggleSidebarVisibility}
          items={feeds}
        />
        <div className="max-md:hidden">
          <RightSection />
        </div>
      </div>
    </div>
  )
}