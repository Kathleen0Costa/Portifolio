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
                 <header className="bg-[#2f4632] text-white">

                    <div className="max-w-screen-xl mx-auto flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center shadow-md fixed w-full bg-[#2f4632] top-0 z-10">
    
                
                        <div className="text-center sm:text-left justify-self-start p-2 font-serif text-sm">
                        Kathleen Costa
                        </div>

   
                        <nav className="mt-2 sm:mt-0 flex gap-2 justify-center sm:justify-end p-2 text-sm">
                        <Link href="/home"
                            className="px-1 py-1 rounded-xl transition hover:bg-[#f4a300]">Home</Link>

                            <Link href="/work"
                            className="px-1 py-1 rounded-xl transition hover:bg-[#f4a300]">Trabalhos</Link>

                            <Link href="/home#about"
                            className="px-1 py-1 rounded-xl transition hover:bg-[#f4a300]">Sobre</Link>

                            <Link href="/home#resume"
                            className="px-1 py-1 rounded-xl transition hover:bg-[#f4a300]">Currículo</Link>

                            <Link href="/contact"
                            className="px-1 py-1 rounded-xl transition hover:bg-[#f4a300] text-center">Fale comigo!</Link>
                        </nav>
                    </div>

                </header>

                <body>
                   {/*hero-contact*/}
                    <section>
                        <div className="bg-amber-100">
                            <h1 className='pt-35 text-black font-serif text-4xl text-center p-8'>Contato</h1>
                        </div>

                        <div className='bg-amber-100 text-black text-center p-8 space-y-4'>
                            <h3 className=' text-2xl'>Vamos conversar?</h3>
                            <p>Se você precisa de uma desenvolvedora e designer para criar, melhorar ou modernizar seu projeto, me chama. Eu respondo rápido.
                            </p>
                        </div>

                        <div className='bg-amber-100 text-black p-8 text-center'>
                          <p>
                            Sou desenvolvedora full-stack e designer. Crio sites completos, sistemas e identidades visuais. Me diga o que você precisa e eu te envio uma proposta rápida e direta.
                          </p>
                            
                          <p className='text-2xl font-serif text-center pt-10 mb-0'>
                            Faça seu orçamento!
                          </p>
                        </div>
                    </section>

                    <section>
                        <div className="bg-amber-100 text-black p-8">
                            <div className=' bg-[#2f4632] m-10 p-8 mt-0 rounded-2xl text-white shadow-md'>
                                <form action="https://formsubmit.co/kathleencosta.dev@gmail.com" method="POST" className="flex flex-col gap-4">
                                    <input type="hidden" name="_subject" value="Nova solicitação de orçamento"/>
  
                                    <input type="text" name="name" placeholder="Seu nome" required 
                                    className='bg-[#5b8160] rounded-2xl p-1 shadow-md'/>
                                    <input type="email" name="email" placeholder="Seu email" required 
                                    className='bg-[#5b8160] rounded-2xl p-1 shadow-md'/>
                                    <input type="number" name="days" placeholder="Prazo" required 
                                    className='bg-[#5b8160] rounded-2xl p-1 shadow-md'/>
                                    <input type="text" name="project" placeholder="Tipo de projeto" required 
                                    className='bg-[#5b8160] rounded-2xl p-1 shadow-md'/>
                                    <textarea name="message" placeholder="Explique sua ideia" required
                                    className='bg-[#5b8160] rounded-2xl p-1 shadow-md'></textarea>

                                <button type="submit"
                                className='bg-[#263829] p-2 rounded-2xl mt-4 hover:bg-[#f4a300] transition shadow-md'>
                                    Solicitar Orçamento</button>
                                </form>
                            </div>
                        </div>
                    </section>

                     {/*FOOTER*/}
                    <footer className=' bg-[#f4a300] p-8 text-center'>
                        <h2 className='text-3xl p-4 font-serif'>Vamos Construir Algo!</h2>
                        <p>📧 kathleencosta.dev@gmail.com</p>
                        <p>🌐 github.com/kathleen-dev</p>
                        <p>🔗 linkedin.com/in/kathleen-costa</p>
                    </footer>

                </body>
        </html>
     );
 }