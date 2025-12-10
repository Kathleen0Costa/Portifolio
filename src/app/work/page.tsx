import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Work () {
  return (
    <html lang="en">
      <head>
                <title>Kathleen Costa - Portfolio</title>  
                <meta name="description" content="Portfolio of Kathleen Costa, Full Stack Developer and Designer. Showcasing projects, skills, and contact information." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    {/* Header */}
                <header className="bg-[#2f4632] text-white px-4 py-4 flex justify-between items-center fixed w-full top-0 z-10 shadow-md">
                    <div>Kathleen Costa</div>
                    <nav className="w-full px-4 py-3 flex justify-between items-end max-w-lg">
                        <Link href="/home"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Home</Link>
                        <Link href="/work"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Work
                        </Link>                       
                        <Link href="/home#about"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">About
                        </Link>
                        <Link href="/home#resume"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Resume
                        </Link>
                        <Link href="/contact"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Get in touch!
                        </Link>
                    </nav>
                </header>
    
    <body>

        {/*hero-projects*/}
         <section className="text-center bg-[#2f4632] text-white pt-30 p-8">
            <h1 className="font-serif, text-4xl p-5 font-serif">My Projects</h1>
            <p className="">A selection of my favorite works — from web apps to automations and AI experiments.</p>
        </section>

  {/*PROJECTS GRID*/}
        <section className="bg-[#f8eacf] p-8">

            {/*Project 1*/}
          <section>
            <div className=" bg-white  text-black p-8 m-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" sm:max-w-40 md:max-w-60 lg:max-w-96  ">
                <img src="/logo1.jpg" alt="Project 1" className='rounded-2xl shadow-md'/>
              </div>
                    <div className="">
                        <h3 className='text-xl font-bold text-center p-4'>Rebranding for painting store</h3>
                         <p>Complete redesign of a paint store's identity, modernizing the palette, typography, and visual style to convey professionalism and trust. Development of a responsive website focused on highlighting products, facilitating category searches, and presenting services clearly. A lightweight, organized, and optimized structure for conversion and fast service.</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva</p>
                            <div className=' flex items-center justify-center'>
                                <a href="https://drive.google.com/drive/folders/1XlJWYq4asJpkiW8O-pC88pIc4u7KXz83?usp=drive_link" target="_blank" className=" p-3 px-10 m-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Phothos</a>
                            </div>
                    </div>
              </div>
          </section>

{/*Project 2*/}
          <section>
            <div className=" bg-white  text-black p-8 m-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" md:max-w-60 lg:max-w-96 ">
                <img src="/juceiapani.jpeg" alt="Project 1" className='rounded-2xl shadow-md'/>
              </div>
                    <div className="">
                        <h3 className='text-xl font-bold text-center p-4'>Visual identity for confectionery</h3>
                         <p className='text-center'>Complete brand development from scratch, including logo creation, color palette, typography, patterns, and graphic elements. The identity was designed to convey delicacy, craftsmanship, and quality, maintaining consistency across all brand touchpoints. The result is a clear, pleasing aesthetic ready for use in products, packaging, and communication.</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva, figma</p>
                            <div className=' flex items-center justify-center'>
                                <a href="" target="_blank" className=" p-3 px-10 m-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Phothos</a>
                            </div>
                    </div>
              </div>
          </section>

{/*Project 3*/}
          <section>
            <div className=" bg-white  text-black p-8 m-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" md:max-w-60 lg:max-w-96 ">
                <img src="/petshop.png" alt="Project 1" className='rounded-2xl shadow-md'/>
              </div>
                    <div className="">
                        <h3 className='text-xl font-bold text-center p-4'>PetShop landing page</h3>
                         <p className='text-center'>Development of a landing page focused on presenting services, products, and unique selling points quickly and clearly. A lightweight, user-friendly layout geared towards conversion, with concise sections, direct calls to action, and a visual design that conveys care and trust. The page is fully responsive and optimized for fast loading.</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva, figma, next.js, React.js, Tailwindcss</p>
                            <div className=' flex items-center justify-center'>
                                <a href="https://lovepet-theta.vercel.app" target="_blank" className=" p-3 px-10 m-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">🧷 Live </a>
                                <a href="https://github.com/Kathleen0Costa/lovepet" target="_blank" className=" p-3 px-10 m-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Code</a>
                            </div>
                    </div>
              </div>
          </section>

        </section>


  {/*FOOTER*/}
  <footer className=' bg-[#f4a300] p-8 text-center'>
    <h2 className='text-3xl p-4 font-serif'>Let’s Build Something!</h2>
    <p>📧 kathleen.dev@gmail.com</p>
    <p>🌐 github.com/kathleen-dev</p>
    <p>🔗 linkedin.com/in/kathleen-costa</p>
  </footer>
        
    </body>
    </html>
  );
}