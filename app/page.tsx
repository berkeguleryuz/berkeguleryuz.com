"use client"
import Container from '@/components/Container'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div>
      <div className='w-10/12 mx-auto pt-4'>
        <Nav />
      </div>
        <Container />
      <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]' />
        <Services />
      <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8' />
        <Projects />
      <div className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8' />
        <Skills />
      <div className='w-10/12 mx-auto my-10'>
        <div className='flex items-start text-2xl text-neutral-300'>
          <a href="/">Berke Güleryüz |<small className='mt-[2px] ml-2'>{new Date().getFullYear()} </small></a> 
        </div>
      </div>
    </div>
  )
}
