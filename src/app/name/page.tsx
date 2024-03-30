"use client"
import {useRouter} from 'next/navigation'
// import style from './page.module.css'
export default function name(){
    let router = useRouter()

    return (
        <main>
            <button className='bg-white	 border-solid border-2 border-black	rounded p-px' onClick={()=>router.back()}>Go to Back</button>
            <br />
            <h2>Hello, I am Muhammad Awais and this is my Second Next.js project.</h2>
        </main>
    )
}