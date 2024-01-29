'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import { Separator } from '../ui/separator'

const data = [
  {
    id: "1",
    artistId: '1',
    artistName: 'sachin',
    imgUrl: "https://github.com/shadcn.png",
    comment: 'very nice',
    likes: [1, 2, 3],
    replies: [
      {
        artistId: "dfd",
        artistName: 'sachin',
        imgUrl: "https://github.com/shadcn.png",
        comment: "thanks"
      }, {
        artistId: "sdfs",
        artistName: 'abi',
        imgUrl: "https://github.com/shadcn.png",
        comment: "welcome"
      }
    ],
    replying: false
  },
  {
    id: '2',
    artistId: '2',
    artistName: 'abi',
    imgUrl: "https://github.com/shadcn.png",
    comment: 'very nice',
    likes: [1, 2, 3],
    replies: [],
    replying: false
  },
  {
    id: "3",
    artistId: '2',
    artistName: 'goku',
    imgUrl: "https://github.com/shadcn.png",
    comment: 'very nice',
    likes: [1, 2, 3],
    replies: [],
    replying: false
  },
]

const CommentSection = () => {

  const [comments, setComments] = useState(data)
  const [replying, setReplying] = useState(false)

  const handleReplying = (id: string) => {
    setReplying(false)
    const newArr = comments.map((item) => {
      if (item.id === id) {
        item.replying = true;
      }else{
        item.replying=false
      }
      return item
    })
    setComments(newArr)
  }

  return (
    <div className='flex flex-col '>
      <div className='flex gap-3'>
        <Input className='focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='add a comment...' />
        <Button variant="secondary">post</Button>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        {comments.map((comment) => (
          <div key={comment.artistId} className='p-2 bg-secondary/25'>
            <div className='flex space-x-1 items-center'>
              <Avatar className='w-5 h-5'>
                <AvatarImage src={comment.imgUrl} alt='profileImage' />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
              <p className='font-semibold flex-1 max-sm:text-sm'>{comment.artistName}</p>
              <p className='text-xs text-foreground/50'><span>{comment.likes.length}</span> likes</p>
              <HeartFilledIcon className='cursor-pointer text-rose-600' />
              <p className='text-xs text-foreground/50'><span>{comment.replies.length}</span> replies</p>
              <Button size="sm" onClick={() => handleReplying(comment.id)} className='text-xs  p-0' variant="link"> reply</Button>
            </div>
            <div  >
              <p className='ml-7 max-sm:text-xs'>{comment.comment}</p>
            </div>

            {comment.replies.length > 0 && (<Separator className='my-2' />)}
            {comment.replies.length > 0 && (<p className='ml-10 text-xs'>replies</p>)}
            <div className='flex flex-col gap-2 mt-2'>
              {comment.replies.length > 0 && (
                comment.replies.map((reply) =>
                  <div key={reply.artistId} className='ml-10 p-2 rounded-md bg-secondary'>
                    <div className='flex space-x-1 text-sm items-center'>
                      <Avatar className='w-5 h-5'>
                        <AvatarImage src={comment.imgUrl} alt='profileImage' />
                        <AvatarFallback>Avatar</AvatarFallback>
                      </Avatar>
                      <p className='font-semibold flex-1 max-sm:text-sm'>{reply.artistName}</p>
                    </div>
                    <div>
                      <p className='ml-7 text-xs'>{reply.comment}</p>
                    </div>
                  </div>
                ))}
            </div>
            {comment.replying && (
              <div className='mt-2'>
                <div className='flex gap-3'>
                  <Input className='focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='add a comment...' />
                  <Button variant="secondary">post</Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection