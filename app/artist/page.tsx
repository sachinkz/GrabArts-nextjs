import HomePage from '@/components/artistHome/home-page'
import { initialProfile } from '@/lib/create-initial-profile'
import React from 'react'

const page =async () => {

  const loggedUser=await initialProfile()
  return (
    <HomePage profile={loggedUser} />
  )
}

export default page