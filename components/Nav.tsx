"use client"
import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {}

const Nav = (props: Props) => {
    const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500'>
        <div className='sm:text-3xl text-xl font-bold inline-block'><a href="/" className='inline-block'>Berke Güleryüz</a></div>
        <div className='sm:hidden' onClick={() => setShowNav(!showNav)}><GiHamburgerMenu className='' size={24}/></div>
        <nav className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 mt-[-3px] ${showNav ? "top-16 visible" : "max-sm:invisible top-0"}`}>
            <ul className='flex items-center max-sm:text-sm justify-between max-sm:justify-around'>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-100 rounded mx-1 ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
                    <a href="#services" className='px-2'>Services</a>
                </li>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-200 rounded mx-1 ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
                    <a href="#projects" className='px-2'>Projects</a>
                </li>
                <li className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-300 rounded mx-1 ${showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"}`}>
                    <a href="#skills" className='whitespace-nowrap px-2'>Skills</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav