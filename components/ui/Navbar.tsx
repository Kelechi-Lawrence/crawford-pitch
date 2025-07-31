import React, { use } from 'react'
import Link from 'next/link'
import { auth, signOut, signIn } from "@/auth"

const Navbar = async() => {
    const session = await auth()
  return (
   <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
    <nav className="flex justify-between item-center">
<Link href ="./">
 <img src="/CSP.png" alt="logo" width={70} height={30} />
</Link>
<div className='flex items-center gap-3'>
    {session && session?.user?(
        <>
        <Link href="/startup/create">
        <span className='text-black'>create</span>
        </Link>
        <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="text-black"type="submit">Sign Out</button>
    </form>
       <Link href={`/user/${session?.user?.id}`}>

        <span className="text-black">{session?.user?.name}</span></Link>
        </>
    ):  <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/" })
      }}
    >
      <button className='text-black font-bold transition-transform duration-300 hover:scale-95' type="submit">Sign in</button>
    </form>
}
</div>
    </nav>  
 
   </header>
  )
}

export default Navbar