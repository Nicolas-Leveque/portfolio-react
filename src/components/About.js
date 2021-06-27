import React from 'react'
import photoProfil from '../data/nico.jpg'

const About = () => {
    return (  
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Bonjour, <br />
                        je m'appelle Nicolas.
                        <br className="hidden lg:inline-block" />
                        Je suis développeur web
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Construction de sites et d'applications web <br />
                        Audit et optimisation SEO et accessibilité <br />
                        HTML / CSS / JavaScript / Reactjs / MongoDB / MySQL / Nodejs 
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:ouline-none hover:bg-green-600 rounded text-lg">Contactez moi</a>
                        <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Anciens projets</a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <p>Après plusieurs années dans les secteurs industriel et logistique, ce qui m'a apporté de l'expérience professionnelle et la rigueur, je reviens vers ma première passion: l’informatique.Devenu développeur web, j'ai ajouter à mes compétences de maintenance, l'aspect programmation et création.</p>
                </div>
                
            </div>
            <div className="my-auto mx-auto h-64 w-64">
                <img src={`${photoProfil}`} alt="mon meilleur profil" className="object-cover object-center rounded" />
            </div>
        </section>
    );
}

export default About;