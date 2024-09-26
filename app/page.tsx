'use client'
import Link from 'next/link';
import React from 'react'
import Card from './components/card';
import { useRouter } from 'next/navigation';


const Home = () => {
  const route = useRouter()
  return (
    <>
    <div className="text-center p-6">
        <h1>Home</h1>
        <br/>
        <Link href={"/navbar"} className='p-4'>Navbar</Link>
        <Link href={"/about"} className='p-4'>About</Link>
        <Link href={"/contact"} className='p-4'>Contact</Link>
        <Link href={"/footer"} className='p-4'>Footer</Link>
      </div>

      

      <div className='text-center'>
        <button onClick={() => route.push("/navbar")} className="p-1">Navbar</button>
        <button onClick={() => route.push("/about")} className="p-1">About</button>
        <button onClick={() => route.push("/contact")} className="p-1">Contact</button>
        <button onClick={() => route.push("/footer")} className="p-1">Footer</button>
      </div>

      <br/>
      <hr className='w-full' />
      <br />

      <div>
      <Card name='Ahmed' rollno='222' day='Monday' timing='9 to 12' />
      <br/>
      <Card name='Ali' rollno='111' day='Monday' timing='2 to 5' />
      </div>
      
      
    </>
  )
}

export default Home
