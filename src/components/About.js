import React from 'react'

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
                    <p>
                        
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;