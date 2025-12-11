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
                 <header className="bg-[#2f4632] text-white">
                    <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:items-center shadow-md fixed w-full bg-[#2f4632] top-0 z-10 ">
    
                
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

        {/*hero-projects*/}
         <section className="text-center bg-[#2f4632] text-white pt-30 p-8">
            <h1 className="font-serif, text-4xl p-5 font-serif">Meus Projetos</h1>
            <p className="">Uma seleção dos meus trabalhos favoritos.</p>
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
                        <h3 className='text-xl font-bold text-center p-4'>Rebranding para loja de tintas </h3>
                         <p>Redesign completo da identidade de uma loja de tintas, modernizando a paleta, tipografia e estilo visual para transmitir profissionalismo e confiança. Desenvolvimento de um site responsivo focado em destacar produtos, facilitar buscas por categorias e apresentar serviços de forma clara. Estrutura leve, organizada e otimizada para conversão e atendimento rápido..</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva</p>
                            <div className=' flex items-center justify-center'>
                                <a href="https://drive.google.com/drive/folders/1XlJWYq4asJpkiW8O-pC88pIc4u7KXz83?usp=drive_link" target="_blank" className=" py-3 m-3 px-10 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Fotos</a>
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
                        <h3 className='text-xl font-bold text-center p-4'>Identidade visual para confeitaria</h3>
                         <p className='text-center'>Desenvolvimento completo da marca do zero, incluindo criação de logotipo, paleta de cores, tipografia, padrões e elementos gráficos. A identidade foi criada para transmitir delicadeza, artesanato e qualidade, mantendo consistência em todos os pontos de contato da marca. O resultado é uma estética clara e agradável, pronta para uso em produtos, embalagens e comunicação.</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva, figma</p>
                            <div className=' flex items-center justify-center'>
                                <a href="" target="_blank" className=" py-3 m-3 px-10 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Fotos</a>
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
                        <h3 className='text-xl font-bold text-center p-4'>Landing page para PetShop</h3>
                         <p className='text-center'>Desenvolvimento de uma landing page focada em apresentar serviços, produtos e diferenciais de forma rápida e clara. Um layout leve e intuitivo, voltado para conversão, com seções objetivas, chamadas para ação diretas e um design visual que transmite cuidado e confiança. A página é totalmente responsiva e otimizada para carregamento rápido.</p>
                        <p className='font-bold p-3'>Tech: Phothoshop, Canva, figma, next.js, React.js, Tailwindcss</p>
                            <div className=' flex items-center justify-center'>
                                <a href="https://lovepet-theta.vercel.app" target="_blank" className=" py-2 m-3 px-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">🧷 Live </a>
                                <a href="https://github.com/Kathleen0Costa/lovepet" target="_blank" className=" py-2 m-3 px-5 bg-[#2f4632] rounded-2xl transition hover:bg-[#f4a300]">💻 Code</a>
                            </div>
                    </div>
              </div>
          </section>

        </section>


  {/*FOOTER*/}
  <footer className=' bg-[#f4a300] p-8 text-center'>
    <h2 className='text-3xl p-4 font-serif'>Vamos Construir Algo!</h2>
    <p>📧 kathleen.dev@gmail.com</p>
    <p>🌐 github.com/kathleen-dev</p>
    <p>🔗 linkedin.com/in/kathleen-costa</p>
  </footer>
        
    </body>
    </html>
  );
}