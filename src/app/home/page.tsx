import Image from "next/image"; 
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        
        <html lang="en">
            <head>
                <title>Kathleen Costa - Portfolio</title>  
                <meta name="description" content="Portfolio of Kathleen Costa, Full Stack Developer and Designer. Showcasing projects, skills, and contact information." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
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
                                    I build scalable web applications, automations and AI-powered solutions.  
                                    My focus is on writing clean, efficient code and delivering user-friendly experiences.
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
                    <h2 className="font-serif text-4xl mb-4">Hello, I'm Kathleen !</h2>
                    <p className="pb-4">
                        I'm a Full Stack Web Developer and Designer passionate about technology, automation, and artificial intelligence. 
                        I love solving problems through code and design, creating digital products that are not only functional but also visually engaging, 
                        bringing real value to people and businesses.
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
                    <h2 className="font-serif text-4xl mb-4">Education</h2>
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

                    <h2 className="text-4xl font-serif pb-4">Experience</h2>
                    <div>
                        <ul className="bg-[#f4a300] p-6 rounded-2xl">
                            <li><span className="font-bold">2025</span> Full Stack Developer – Freelance projects (React, Node.js, APIs, databases)</li>
                            <li><span className="font-bold">2024</span> Automation Developer – Built Python bots, RPA scripts, and API integrations</li>
                            <li><span className="font-bold">2023</span> Junior Web Developer – HTML, CSS, JavaScript websites</li>
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
                    <h2 className="text-4xl font-serif p-6">Technical skills</h2>
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
                            <h3 className="font-bold">Databases & Cloud</h3>
                            <p>PostgreSQL – MongoDB – MySQL – Firebase – AWS – Docker</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Automation & AI</h3>
                            <p>Python (Pandas, Selenium, FastAPI) – ChatGPT API – RPA tools</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold">Other</h3>
                            <p>Git & GitHub – Agile/Scrum – CI/CD – REST APIs</p>
                        </div>
                    </div>
                </section>

                {/* Languages Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Languages</h2>
                    <p>Portuguese – Native</p>
                    <p>English – Fluent</p>
                    <p>Spanish – basic</p>
                    <p>Russian - basic</p>
                </section>

                {/* Activities Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Activities</h2>
                    <ul>
                        <li>2023 – Winner: Mandacaru Mathematics Olympiads</li>
                    </ul>
                </section>

                {/* Hobbies Section */}
                <section className="bg-amber-100 text-black p-6">
                    <h2 className="font-serif text-4xl pb-6">Hobbies & Interests</h2>
                    <ul>
                        <li className="p-2">🩰 Ballet dancer</li>
                        <li className="p-2">🧶 Crochet, painting and crafts</li>
                        <li className="p-2">🎮 Gaming</li>
                        <li className="p-2">📚 Reading books</li>
                        <li className="p-2">🐾 Cats, coffee and coding</li>
                    </ul>
                </section>

                {/* Contact Section */}
                <section className="bg-[#f4a300] p-10 text-center">
                    <h2 className="text-5xl font-serif">Contact</h2>
                    <p>Belo Horizonte, MG - Brazil</p>
                    <p className="text-black underline">
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=kathleencosta.dev@gmail.com&su=Interesse+no+seu+portfólio+de+Desenvolvedora&body=Olá+Kathleen%2C%0D%0A%0D%0AVi+seu+portfólio+e+gostaria+de+conversar+sobre+uma+possível+colaboração.%0D%0A%0D%0APoderia+me+responder+quando+for+possível%3F%0D%0A%0D%0AObrigado%21">
                            Entre em contato por email
                        </a>
                    </p>
                    <p className="text-black underline">
                        <a target="_blank" href="https://wa.me/5531990855251?text=Olá%2C+vi+seu+portfólio+e+gostaria+de+saber+mais+sobre+seus+serviços.%0D%0A%0D%0A">
                            Entre em contato por whatsapp
                        </a>
                    </p>
                </section>
            </body>
        </html>
    );
}
