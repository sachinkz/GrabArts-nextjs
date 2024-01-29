"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext } from 'react';


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const data: string | null = localStorage.getItem("grabarts");

  let storageData: any

  if (data) {
    storageData = JSON.parse(data)
  }



  const AuthContext = createContext({
    storageData
  });

  const router = useRouter()

  if (!storageData?.isArtist) {
    router.push('/auth-artist')
  }

  if (storageData.token) {
    const fetchUser = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/artist/profile/${storageData?.artistId}`, {
        headers: {
          Authorization: storageData.token
        }
      })
      console.log(res.data)
    }
    fetchUser()
  }


  return (
    <AuthContext.Provider value={{ storageData }}>
      {children}
    </AuthContext.Provider>
  )
}


