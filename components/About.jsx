import React from 'react';
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
            I am an IB diploma candidate at Interlake high school. I have been dabbling
            with software for years but have only recently started taking it seriously.
            This summer I am building a fullstack blockchain application and I am also seeking
            a summer/fall internship where I can be hands on with interesting software.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
