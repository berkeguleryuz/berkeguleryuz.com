import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import Berke from "@/public/bg.jpeg"
import Image from 'next/image'

type Props = {}

const Container = (props: Props) => {
    const ReactRotatingText = require('react-rotating-text');
  return (
    <div className='lg:pt-16 pt-4 relative w-10/12 mx-auto mt-10'>
        <div className='md:flex items-center justify-between flex-row-reverse'>
            <div className='flex justify-end items-end max-md:pt4'>
                <div className='relative mt-10'>
                    <Image className="w-full h-auto transform rounded-3xl" src={Berke} alt="Berke Güleryüz" width={400} />
                 </div>
            </div>
            <div className='p-4 pl-0 mt-5 sm:mt-20'>
                <p className='text-3xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>I&apos;m</p>
                    <p className='text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl py-4'><span className="text-[#5651e5]"><ReactRotatingText items={['turning your ideas into innovative web projects.', 'creating websites for you.', 'building web applications.', 'managing your social medias and communities.']} /></span></p>
                <div className='flex items-center mt-6 md:mt-14 sm:dvh-50'>
                    <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4'>
                        <a href="https://github.com/berkeguleryuz" className='hover:opacity-100 opacity-75 transition ease-in duration-150 mb-5'>
                            <AiOutlineGithub size={24}/>
                        </a>
                        <a href="https://instagram.com/berkeguleryuz/" className='hover:opacity-100 opacity-75 transition ease-in duration-150 mb-5'><GrInstagram size={24} href="https://instagram.com/berkeguleryuz/"/></a>
                        <a href="https://twitter.com/berkeGuleryuz" className='hover:opacity-100 opacity-75 transition ease-in duration-150 mb-5'><AiOutlineTwitter size={24}/></a>
                    </ul>
                    <a href="mailto:berkeguleryuz@hotmail.com" className='px-4 py-[5px] mb-5 whitespace-nowrap transition ease-in duration-150 bg-neutral-700 hover:bg-neutral-800 rounded-2xl border-[0.5px] border-[#363636]'>E-mail Me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container