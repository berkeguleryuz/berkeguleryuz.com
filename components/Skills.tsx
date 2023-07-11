import Image from 'next/image'
import React from 'react'
import Html from "../public/skills/html.png"
import Css from "../public/skills/css.png"
import Javascript from "../public/skills/javascript.png"
import ReactImg from "../public/skills/react.png"
import Tailwind from "../public/skills/tailwind.png"
import NextJs from "../public/skills/nextjs.png"
import Mongo from "../public/skills/mongo.png"
import Nodejs from "../public/skills/nodejs.png"
import Bootstrap from "../public/skills/bootstrap.png"

type Props = {}

const Skills = (props: Props) => {
  return (
    <div id="skills" className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold'>Skills</h1>
        <p className='pt-6 text-neutral-300'>The products, apps and services I use on a daily basis for work and life.</p>
        <div className='mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10'>
        <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={ReactImg} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>React</h1>
                    <p className='text-neutral-400'>Front-End purposes</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Tailwind} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Tailwind</h1>
                    <p className='text-neutral-400'>Perfect responsible design</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={NextJs} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Next.JS</h1>
                    <p className='text-neutral-400'>Server & Client-Side Applications</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Html} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>HTML</h1>
                    <p className='text-neutral-400'>Basic instructions.</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Css} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>CSS</h1>
                    <p className='text-neutral-400'>Improve the UI&UX</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Javascript} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Javascript</h1>
                    <p className='text-neutral-400'>i++</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Mongo} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>MongoDB</h1>
                    <p className='text-neutral-400'>MERN Applications</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Nodejs} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Node.JS</h1>
                    <p className='text-neutral-400'>MERN Applications</p>
                </div>
            </a>
            <a href="" className='border-[0.5px] border-neutral-500 block rounded-2xl my-6 hover:scale-105 hover:duration-150 ease-in'>
                <div className='py-8 bg-neutral-800 w-full text-center rounded-t-2xl'>
                    <Image className='max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125' src={Bootstrap} width={64} height={64} alt="" />
                </div>
                <div className='p-8 py-10'>
                    <h1 className='mb-1 font-bold'>Bootstrap</h1>
                    <p className='text-neutral-400'>For your websites.</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Skills