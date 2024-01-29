import { auth } from "@clerk/nextjs";
import axios from "axios";


export const currentProfile=async () => {
    const {userId}=auth();

    if(!userId) return null;

    const profile=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/getuser/${userId}`)

    return profile.data;
}