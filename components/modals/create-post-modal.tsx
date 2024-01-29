"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { FileUplaod } from "../file-upload"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { PlusCircle } from "lucide-react"
import { Textarea } from "../ui/textarea"
import axios from "axios"
import { useProfileContext } from "../providers/profile-provider"
import { redirectToSignIn } from "@clerk/nextjs"
import { Dispatch, SetStateAction, useState } from "react"

const formSchema = z.object({
    postUrl: z.string().min(2, {
        message: "Please upload an image.",
    }).max(200),
    caption: z.string().max(200, { message: "maximum 200 characters allowed" }),
})

export default function CreatePostModal({isOpen,closeModal}:{isOpen: boolean,closeModal:Dispatch<SetStateAction<boolean>>}) {

    const router=useRouter()

    const { profile } = useProfileContext()
    
    if(!profile){
        redirectToSignIn()
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            postUrl: "",
            caption: "",

        },
    })

    const isLoading = form.formState.isSubmitting;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/artist/post`, {
            ...values,
            userId: profile.userId,
            name:profile.name
        })
        console.log(res.data)
        if(res.data.createdPost){
            router.push('/artist')
            closeModal(false)
        }
    }


    const handleClose=()=>{
        form.reset()
    }



    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogTrigger>
                <div className='flex hover:bg-secondary/25 cursor-pointer pl-5 py-2 items-center gap-2'>
                    <PlusCircle className='w-4 h-4 max-lg:h-6 max-lg:w-5' />
                    <p className='text-primary/75 hover:text-primary max-lg:hidden'>Create Post</p>
                </div>
            </DialogTrigger>
            <DialogContent className="max-sm:p-5">
                <DialogHeader>
                    <DialogTitle>Create Post</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-10 flex px-5 max-md:px-0 items-center flex-col">
                        <FormField disabled={isLoading} control={form.control} name="postUrl" render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="">Select the Picture</FormLabel>
                                <FormControl>
                                    <FileUplaod endpoint="postImage" value={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField
                            control={form.control}
                            name="caption"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel >Caption</FormLabel>
                                    <FormControl >
                                        <Textarea {...field} onChange={field.onChange} disabled={isLoading} placeholder="Add a caption" className="focus-visible:ring-0 focus-visible:ring-offset-0" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-fit self-center" type="submit">Post</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
