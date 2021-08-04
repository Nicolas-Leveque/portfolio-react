import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { CodeIcon } from "@heroicons/react/solid";
import { ocProjects, otherProjects } from "../data/data";

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font max-w-screen-lg lg:mt-0 mt-64">
            <div className="container w-full py-10 text-center ">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Projets OpenClassrooms</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Voici les projets effectué durant la formation OpenClassrooms</p>
                    <div className="flex justify-center flex-wrap mt-8 w-full">
                        {ocProjects.map((projet, index) => (
                            
                            <article
                                href={projet.linkRepo}
                                key={projet.key}
                                target="_blank"
                                rel="noreferrer"
                                data-aos="flip-right"
                                data-aos-offset={index * 50}
                                className="flex relative w-72 m-2 xs:w-full">
                                    <img 
                                        src={projet.image} 
                                        alt={`gallery ${projet.key}`}
                                        className="absolute inset-0 w-full h-full object-cover object-center"/>
                                    <div className="relative px-8 py-10 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{projet.subtitle}</h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">{projet.title}</h1>
                                        <p className="leading-relaxed">{projet.description}</p>
                                        {projet.link && <a href={projet.link} target="_blank" rel="noreferrer">Lien direct </a>}
                                        <br/>
                                        {projet.linkRepo && <a href={projet.linkRepo}>Lien GitHub </a>}
                                    </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Autres Projets</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Voici les autres projets que j'ai mis en oeuvre sur mon temps libre</p>
                    <div className="flex justify-center flex-wrap mt-8">
                        {otherProjects.map((projet, index) => (
                            <article
                                href={projet.linkRepo}
                                key={projet.key}
                                target="_blank"
                                rel="noreferrer"
                                data-aos="flip-right"
                                data-aos-offset={index * 100}
                                className="flex relative w-72 m-2 xs:w-full">
                                    <img 
                                        src={projet.image} 
                                        alt={`gallery ${projet.key}`}
                                        className="absolute inset-0 w-full h-full object-cover object-center"/>
                                    <div className="relative px-8 py-10 z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-90">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{projet.subtitle}</h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">{projet.title}</h1>
                                        <p className="leading-relaxed">{projet.description}</p>
                                        {projet.link && <a href={projet.link} target="_blank" rel="noreferrer">Lien direct </a>}
                                        <br/>
                                        {projet.linkRepo && <a href={projet.linkRepo}>Lien GitHub </a>}
                                    </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects