"use client"


import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"

interface fileUploadProps {
    onChange:(url?:string)=>void;
    value:string;
    endpoint:"orderImage" | "profileImage" | "postImage";
}

export const FileUplaod = ({
    onChange,value,endpoint
}:fileUploadProps) => {

    const fileType=value.split(".").pop();

    if(value&& fileType!=="pdf"){
        return(
            <div className="relative h-[400px] max-md:w-[250px] max-md:h-[250px] w-[400px] mt-5">
                <Image fill src={value} alt="Upload" className="rounded-lg object-cover"/>
                <button onClick={()=>onChange("")}
                className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-3 shadow-sm">
                    <X className="h-4 w-4"/>
                </button>
            </div>
        )
    }
    return ( 
       <UploadDropzone className="mt-10 w-full h-auto  border-2 border-foreground" endpoint={endpoint} onClientUploadComplete={(res)=>{
        onChange(res?.[0].url)
       }}
       onUploadError={(error)=>{
        console.log(error)
       }}
       />
     );
}
