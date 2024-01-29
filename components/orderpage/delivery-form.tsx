"use client"

import React from 'react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
    imgUrl: z.string().min(5, { message: "upload an image" }).max(100),
    fullName: z.string().min(3, { message: "Please provide a name" }).max(50),
})

const DeliveryForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            imgUrl: "",
        }
    })

    const isLoading = form.formState.isSubmitting;
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


    return (
        <Form {...form}>
            <div className='flex justify-center w-full text-2xl font-bold text-center my-10'>
                <h1>Provide your Delivery address</h1>
            </div>
            <div className='flex justify-center mb-10'>
                <div className="flex flex-col justify-center bg-secondary py-2 px-5 rounded-lg">
                    <div className='space-x-2'>

                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Select this address
                        </label>
                    </div>
                    <p className='ml-6 text-sm opacity-60'>sachin k, madathil house, keezhur, iritty...</p>
                </div>
            </div>
            <form action="" className="space-y-8">
                <div className="space-y-8 px-6">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                        <FormItem className='flex flex-col gap-5 items-center'>
                            <div className='flex w-[70%] max-md:w-[95%] max-md:flex-col items-center justify-around gap-5'>
                                <div className='w-[50%] gap-5 flex flex-col max-md:w-[95%]'>
                                    <div>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 datk:text-secondary/70">
                                            Full name
                                        </FormLabel>
                                        <FormControl>
                                            <Input className="focus-visible:ring-0 focus-visible:ring-offset-0" placeholder=" Enter your full name" disabled={isLoading} {...field} />

                                        </FormControl>

                                    </div>
                                    <div>

                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 datk:text-secondary/70">
                                            Mobile
                                        </FormLabel>
                                        <FormControl>
                                            <Input className="  focus-visible:ring-0 focus-visible:ring-offset-0" placeholder=" Enter your mobile number" disabled={isLoading} {...field} />

                                        </FormControl>
                                    </div>
                                </div>
                                <div className='w-[50%] gap-5 flex flex-col max-md:w-[95%]'>
                                    <div>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 datk:text-secondary/70">
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input className=" focus-visible:ring-0 focus-visible:ring-offset-0" placeholder=" Enter server name" disabled={isLoading} {...field} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormLabel className="uppercase text-xs font-bold text-zinc-500 datk:text-secondary/70">
                                            Pin number
                                        </FormLabel>
                                        <FormControl>
                                            <Input className=" focus-visible:ring-0 focus-visible:ring-offset-0" placeholder="pin number" disabled={isLoading} {...field} />
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[70%] max-md:w-[90%]'>
                                <FormLabel className="uppercase text-xs font-bold text-zinc-500 datk:text-secondary/70">
                                    Delivery Address
                                </FormLabel>
                                <FormControl>
                                    <Textarea className=" focus-visible:ring-0 focus-visible:ring-offset-0" placeholder=" Enter Delivery Address" disabled={isLoading} {...field} />
                                </FormControl>
                            </div>
                        </FormItem>
                    )}>

                    </FormField>
                </div>
                <DialogFooter className=" px-6 py-4 flex justify-center">
                    <Button variant="default" type="submit" disabled={isLoading} >
                        Proceed To Pay
                    </Button>

                </DialogFooter>
            </form>
        </Form>
    )
}

export default DeliveryForm