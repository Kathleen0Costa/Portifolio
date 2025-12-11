import Image from "next/image"; 
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main>
            {/* Header */}
            <header className="bg-[#2f4632] text-white">

                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center shadow-md fixed w-full bg-[#2f4632] top-0 z-10">
    
                
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


                {/* Hero Section */}
                <section id="home" className="bg-[#2f4632] flex flex-col gap-8 items-center min-h-screen px-4 p-5 pt-20">
                    <div>
                        <h1 className="p-10 font-serif text-6xl lg:text-7xl font-bold leading-0.9 items-center justify-center flex">
                            PORTFOLIO
                        </h1>
                        <div>
                            <p className="flex space-x-2 items-center justify-center">
                                <a className="text-yellow-600 text-3xl opacity-60 -mt-4 p-4">DEV</a>
                                <a className="text-yellow-600 text-3xl opacity-60 -mt-4 p-4">DEV</a>
                                <a className="text-yellow-600 text-3xl opacity-60 -mt-4 p-4">DEV</a>
                            </p>
                        </div>

                        <div className="sm+:flex sm+:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-8 items-center justify-center">
                            <div>
                                <p className="flex items-center justify-center p-10 text-center">
                                    Eu construo aplicações web escaláveis, automações e soluções com IA.
                                    Meu foco é escrever código limpo, eficiente e entregar experiências fáceis de usar.
                                </p>
                                <div className="bg-[#322d29] flex flex-col items-center justify-center text-center p-4 rounded-2xl shadow-[6px_6px_0_#000000] max-w-80 mx-auto">
                                    <p><a href="https://github.com/Kathleen0Costa">GH: @kathleen-dev</a></p>
                                    <p><a href="https://www.linkedin.com/in/kathleen-costa-2634a0367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LK: kathleen-costa</a></p>
                                    <p><a href="https://www.instagram.com/kathleencosta.dev?igsh=emxrdGJqaWNxZzZl">IG: @kathleen_dev</a></p>
                                </div>
                            </div>

                            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-5">
                                <div className="relative h-auto w-64 md:w-80 lg:w-96 bg-[#f4a300] p-3 rounded-2xl shadow-[6px_6px_0_#000000] max-w-80 mx-auto">
                                    <img src="/eu.jpeg" alt="kathleen-costa" className="h-auto w-auto rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 px-4 bg-amber-100 text-center text-black">
                    <h2 className="font-serif text-4xl mb-4">Olá, eu sou a Kathleen!</h2>
                    <p className="pb-4">
                        Sou Desenvolvedora Full Stack e Designer, apaixonada por tecnologia, automação e inteligência artificial.
                        Amo resolver problemas com código e design, criando produtos digitais que são funcionais e visualmente atraentes, trazendo valor real para pessoas e negócios.
                    </p>
                    <a className="text-[#f4a300] underline" href="https://linkedin.com/in/kathleen-costa" target="_blank">
                        linkedin.com/in/kathleen-costa
                    </a>
                    <div className="relative rounded-xl overflow-hidden h-auto w-full shadow-[8px_8px_0_#2f4632] transition hover:scale-1.03 hover:shadow-[10px_10px_0_(#f4a300)] mx-auto">
                        <img src="/banner.jpeg" alt="kathleen-costa" className="h-auto w-full" />
                    </div>
                </section>

                {/* Education Section */}
                <section 
                id="resume"
                className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl mb-4">Formação</h2>
                    <ul className="pb-10">
                        <li><span className="font-bold">2025</span> - Systems Development - Unicesumar</li>
                        <li><span className="font-bold">2024-2025</span> - Development FULL-STACK – Alura</li>
                        <li><span className="font-bold">2024</span> - Advanced English – ginead</li>
                        <li><span className="font-bold">2024</span> - AI and Automation with Python –</li>
                        <li><span className="font-bold">2023</span> - Design Graphics – SENAC</li>
                        <li><span className="font-bold">2023</span> - Data Science with Python – Alura</li>
                        <li><span className="font-bold">2023</span> - Web Design –</li>
                        <li><span className="font-bold">2023</span> - English – ginead</li>
                        <li><span className="font-bold">2022</span> - Python basics - FGV</li>
                    </ul>

                    <h2 className="text-4xl font-serif pb-4">Experiência</h2>
                    <div>
                        <ul className="bg-[#f4a300] p-6 rounded-2xl">
                            <li><span className="font-bold">2025</span> Desenvolvedora Full Stack – Projetos freelance (React, Node.js, APIs, bancos de dados)</li>
                            <li><span className="font-bold">2024</span> Desenvolvedora de Automação – Criação de bots Python, scripts RPA e integrações com APIs</li>
                            <li><span className="font-bold">2023</span> Desenvolvedora Web Júnior – Sites em HTML, CSS e JavaScript</li>
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <a className="bg-black text-white p-2 rounded-2xl">#ProblemSolving</a>
                            <a className="bg-black text-white p-2 rounded-2xl">#CleanCode</a>
                            <a className="bg-black text-white p-2 rounded-2xl">#Teamwork</a>
                            <a className="bg-black text-white p-2 rounded-2xl">#Agile</a>
                        </div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="bg-[#2f4632]">
                    <h2 className="text-4xl font-serif p-6">Habilidades técnicas</h2>
                    <div>
                        <div className="p-6">
                            <h3 className="font-bold">Frontend</h3>
                            <p>HTML – CSS – JavaScript – React – Next.js – Tailwind</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Backend</h3>
                            <p>Node.js – Express – Python – Django – Flask</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Bancos de dados & Cloud</h3>
                            <p>PostgreSQL – MongoDB – MySQL – Firebase – AWS – Docker</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Automação & IA</h3>
                            <p>Python (Pandas, Selenium, FastAPI) – ChatGPT API – RPA tools</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Outros</h3>
                            <p>Git & GitHub – Agile/Scrum – CI/CD – REST APIs</p>
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Idiomas</h2>
                    <p>Português – Nativo</p>
                    <p>Inglês – Avançado</p>
                    <p>Espanhol – Basico</p>
                    <p>Russo - Basico</p>
                </section>

                {/* Activities Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Atividades</h2>
                    <ul>
                        <li>2023 – Vencedora: Olimpíada de Matemática Mandacaru</li>
                    </ul>
                </section>

                {/* Hobbies Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Hobbies & Interesses</h2>
                    <ul>
                        <li className="p-2">🩰 Bailarina</li>
                        <li className="p-2">🧶 Crochê, pintura e artesanato</li>
                        <li className="p-2">🎮 Jogos</li>
                        <li className="p-2">📚 Ler livros</li>
                        <li className="p-2">🐾 Gatos, café e programação</li>
                    </ul>
                </section>

                
                 {/*FOOTER*/}
             <footer className=' bg-[#f4a300] p-8 text-center'>
                <h2 className='text-3xl p-4 font-serif'>Vamos Construir Algo!</h2>
                <p>📧 kathleen.dev@gmail.com</p>
                <p>🌐 github.com/kathleen-dev</p>
                <p>🔗 linkedin.com/in/kathleen-costa</p>
            </footer>

         </main>   
    );
}
