import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import photoProfil from '../data/nico.jpg'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (  
        <section id="about" className="max-w-screen-lg">
            <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center">
                <div data-aos="fade-up" className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Bonjour, <br />
                        je m'appelle Nicolas
                        <br  />
                        Je suis développeur web
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Construction de sites et d'applications web <br />
                        Audit et optimisation SEO et accessibilité <br />
                        HTML / CSS / JavaScript / Reactjs / MongoDB / MySQL / Nodejs 
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto:nicoleveque@outlook.com" className="transition duration-500 ease-in-out inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:ouline-none hover:bg-green-600 hover:animate-pulse rounded text-lg ">Contactez moi</a>
                        <a href="#projects" className="transition duration-500 ease-in-out ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"> Projets</a>
                    </div>
                </div>
                <div data-aos="fade-up"  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pb-20 ">
                    <img src={`${photoProfil}`} alt="mon meilleur profil" className="object-cover object-center rounded-full" />
                </div>
                
            </div>
        </section>
    );
}

export default About;