import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar/Navbar'
import { TopAlert } from '@/components/navbar/TopAlert'
import Link from 'next/link'

export default function Home() {




  return (
    <>
      <Navbar onLandingpage />
      <div className='w-full min-h-screen px-5 mt-36'>
        <div className='w-full flex flex-col justify-center items-center text-center p-3 gap-10'>
          <TopAlert content='😀 Connect with most talented Artists' />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Social media and a freelance work place for Artists
          </h1>
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Signup today to join the GrabArts artist community or purchase an artwork from the best artist you likes
          </h3>
          <div className='flex gap-5'>
            <Link href="/artist"><Button variant='outline' size="default">Join as an Artist</Button></Link>
            <Link href="/shop"><Button variant='outline' size="default">Purchase Art</Button></Link>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}
