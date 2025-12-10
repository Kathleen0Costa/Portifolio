import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact () {
  return (
    <html lang="en">
      <head>
                <title>Kathleen Costa - Portfolio</title>  
                <meta name="description" content="Portfolio of Kathleen Costa, Full Stack Developer and Designer. Showcasing projects, skills, and contact information." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
    {/* Header */}
                <header className="bg-[#2f4632] text-white px-4 py-4 flex justify-between items-center fixed w-full top-0 z-10 shadow-md text-center ">
                    <div>Kathleen Costa</div>
                    <nav className="w-full px-4 py-3 flex justify-between items-end max-w-lg">
                        <Link href="/home"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Home</Link>
                        <Link href="/work/page"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Work
                        </Link>                       
                        <Link href="/home#about"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">About
                        </Link>
                        <Link href="/home#resume"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300]">Resume
                        </Link>
                        <Link href="/contact"
                        className="px-3 py-2 rounded-xl transition hover:bg-[#f4a300] text-center">Get in touch!
                        </Link>
                    </nav>
                </header>
                <body>
                   {/*hero-contact*/}
                    <section>
                        <div className="bg-amber-100">
                            <h1 className='pt-30 text-black font-serif text-4xl text-center p-8'>Contact</h1>
                        </div>

                        <div className='bg-amber-100 text-black text-center p-8 space-y-4'>
                            <h3 className=' text-2xl'>Let's talk?</h3>
                            <p>If you need a developer and designer to create, improve, or modernize your project, give me a call. I respond quickly.
                            </p>
                        </div>

                        <div className='bg-amber-100 text-black p-8 text-center'>
                          <p>
                            I'm a full-stack developer and designer. I create complete websites, systems, and visual identities. Tell me what you need, and I'll send you a quick and direct proposal.
                          </p>
                            
                          <p className='text-2xl font-serif text-center pt-10 mb-0'>
                            Make your budget!
                          </p>
                        </div>
                    </section>

                    <section>
                        <div className="bg-amber-100 text-black p-8">
                            <div className=' bg-[#2f4632] m-10 p-8 mt-0 rounded-2xl text-white shadow-md'>
                                <form action="https://formsubmit.co/kathleencosta.dev@gmail.com" method="POST" className="flex flex-col gap-4">
                                    <input type="hidden" name="_subject" value="Nova solicitação de orçamento"/>
  
                                    <input type="text" name="name" placeholder="Name" required 
                                    className='bg-[#5b8160] rounded-2xl p-2 shadow-md'/>
                                    <input type="email" name="email" placeholder="Your email" required 
                                    className='bg-[#5b8160] rounded-2xl p-2 shadow-md'/>
                                    <input type="number" name="days" placeholder="Prazo" required 
                                    className='bg-[#5b8160] rounded-2xl p-2 shadow-md'/>
                                    <input type="text" name="project" placeholder="Type of project" required 
                                    className='bg-[#5b8160] rounded-2xl p-2 shadow-md'/>
                                    <textarea name="message" placeholder="Explique sua ideia" required
                                    className='bg-[#5b8160] rounded-2xl p-2 shadow-md'></textarea>

                                <button type="submit"
                                className='bg-[#263829] p-2 rounded-2xl mt-4 hover:bg-[#f4a300] transition shadow-md'>
                                    Request Quote</button>
                                </form>
                            </div>
                        </div>
                    </section>

                </body>
        </html>
     );
 }