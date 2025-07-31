import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({post} : {post:startUpCardType}) => {
    const {_createdAt,views,author:{id:authorId,name}, title, category, _id, image} =  post;
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p>{formatDate(post._createdAt)}</p>
            <div className='flex gap-1.5'>
               <EyeIcon className='size-6 text-primary'/>
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className="flex-1">
                <Link href ={`/user/${authorId?.id}`}>
                <p className="text-16-medium line-clamp-1">{authorId?.name}</p>
                </Link>
                <Link href={`startup/${_id}`}>
                <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
                </div>
                <Link href ={`/user/${authorId?.id}`}>
                <Image src={image} alt='image'/>
                </Link>
                 </div>
    </li>
  )
}

export default StartupCard