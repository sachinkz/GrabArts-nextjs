"use client"

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"

interface fileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "serverImage" | "messageFile" | "orderImage" | "profileImage" | "postImage";
}

export const FileUplaod = ({
    onChange, value, endpoint
}: fileUploadProps) => {

    const fileType = value.split(".").pop();

    if (value && fileType !== "pdf") {
        return (
            <div className="flex w-full justify-center border-2 border-primary/10 rounded-md">
                <div className="relative flex justify-center h-52 w-52 my-5">
                    <Image fill src={value} alt="Upload" className="rounded-lg h-52 w-52 object-cover" />
                    <button onClick={() => onChange("")}
                        className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm">
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        )
    }
    if (value && fileType === "pdf") {
        return (
            <div className="relative flex flex-col gap-y-4 items-center  p-2 mt-2 rounded-md bg-background/10">
                <FileIcon className="h-10 w-10 fill indigo-200 stroke-indigo-400" />
                <a href={value} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline">
                    {value}
                </a>
                <button onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm">
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }
    return (
        <UploadDropzone className="mt-5 border-2 border-dashed border-primary/50" endpoint={endpoint} onClientUploadComplete={(res) => {
            onChange(res?.[0].url)
        }}
            onUploadError={(error) => {
                console.log(error)
            }}
        />
    );
}
