import Card from './project-card'

import gopher from '../../public/gopher.png'
import gramophone from '../../public/gramophone.png'
import OS from '../../public/OS.png'
import python from '../../public/python.png'
import key from '../../public/key.png'
import miniature from '../../public/miniature.png'

const projects = {
    'realtime-chatroom':{
        'name':'Realtime Encrypted Chatroom',
        'when':'May 2023',
        'technologies':'Javascript, Node.js, Express.js, EJS, MongoDB, Docker',
        'link':'https://github.com/Sam-Mobed/encrypted-realtime-chat',
        'description':'This project was my very first shot at full stack development. This app enables communication between users by allowing them to create secure chatrooms, ensuring data privacy and protection. Leveraging the power of technologies such as Javascript, Node.js, Express.js, EJS, MongoDB, and Docker, I constructed a robust architecture that guarantees both functionality and security. The cornerstone of this project lies in its implementation of crystals-kyber, a post-quantum key exchange protocol, and AES encryption, ensuring every interaction remains encrypted to both traditional computers and quantum computers. To bolster security further, I incorporated real-time communication capabilities through socket.io and enforced user authentication using JWTs, while employing bcrypt hashing for the secure storage of passwords and logs. Taking a step further, I containerized the entire application through Docker, creating a seamless deployment process that culminated in a successful launch on AWS. This deployment strategy not only ensures heightened accessibility but also lays the foundation for scalable growth.',
    },
    'python-CLI':{
        'name':'MusiCLI',
        'when':'August 2023',
        'technologies':'Python, Spotify API, Flask',
        'link':'https://github.com/Sam-Mobed/MusiCLI',
        'description':'Currently in development, the MusiCLI project is my most recent endeavor. At its core, MusiCLI is a dynamic Command Line Interface (CLI) that facilitates the seamless import of playlists from Spotify. By simplifying the import process, I aim to optimize operational efficiency while simultaneously alleviating the burden of doing the work manually. In a bid to further enhance user experience, I have automated the conversion of the imported data into universally compatible Excel or CSV formats. This transformation not only adds an element of user convenience but also opens doors to effortless data analysis and a myriad of applications. One of the hallmark features of MusiCLI lies in its dual functionality, affording users the flexibility to upload their own Excel/CSV files, thereby enabling the creation or augmentation of playlists with ease. This feature underscores the project\'s commitment to offering a user-friendly and adaptable approach to music management. The MusiCLI project is developed using Python, along with the Spotify API and Flask.',
    },
    'misa-website':{
        'name':'MISA Website',
        'when':'July 2023',
        'technologies':'Next.js, TypeScript, TailwindCSS, Framer Motion, Sanity.io',
        'link':'https://github.com/Sam-Mobed/MISA-website',
        'description':'This project is the result of my work as the Head of Web Design for the McGill Iranian Student Association. While it awaits deployment, undergoing final refinements, I am eager to share its significant features. Independently developed, the website is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Introducing a Content Management System (CMS) via Sanity.io, I ensured effortless content updates for the site. Leveraging the next-intl library within Next.js, I added internationalization, rendering the website accessible in both Farsi and English. This adaptability sets the stage for future expansion to encompass additional languages.',
    },
    'simulated-os':{
        'name':'Simulated Operating System',
        'when':'April 2023',
        'technologies':'C',
        'link':'https://github.com/Sam-Mobed/Simulated-OS',
        'description':'As the main project in my COMP310 course (Introduction to Operating Systems), I developed a simulated Operating System by building on top of a very simple shell that was provided as the starting point of the project. The C language was used to develop this shell, as most modern operating systems are also built with C. This intricate shell encompassed a wide array of functionalities, including foundational commands like directory changes, file creation, and variable settings. Notably, the system boasted the capability to execute scripts, which harnessed the potential of files containing sequences of commands. Furthermore, I engineered a scheduling infrastructure, which then allowed support for concurrent processes. I took a step further by expanding the OS Shell\'s syntax to incorporate concurrent process creation and implemented four scheduling policies. As my last step, I added memory management to the shell, by developing scaffolding for paging. This foundation was further strengthened by the design and implementation of demand paging, a pivotal feature that enables optimal memory utilization. Notably, I introduced the LRU (Least Recently Used) replacement policy within the demand paging framework, an effort aimed at enhancing memory efficiency.',
    },
    'emotionly':{
        'name':'Emotion.ly',
        'when':'December 2022',
        'technologies':'React, Flask, Spotify API, Python NLTK',
        'link':'https://github.com/AdamAlAttrach/emotion.ly',
        'description':'Emotion.ly is a dynamic web application designed to curate personalized music playlists by interpreting the emotions conveyed within user-generated text input. This innovative solution materialized through collaborative efforts as part of the prestigious McGill CodeJam Hackathon, where I collaborated with three other adept participants. Our collective effort culminated in the creation of a user-centric platform that changes conventional music recommendation systems.',
    },
    'go-microservices':{
        'name':'Microservices Server in Go',
        'when':'Project soon to be developed',
        'technologies':'Go, Docker, Kubernetes',
        'link':'No repository yet',
        'description':'Although the coding phase hasn\'t started yet, this upcoming project will be a significant milestone in my journey. Envisioned as a microservices server crafted using the Go programming language, my primary objective is to learn the intricacies of Go and its diverse features, most notably its robust concurrency models. Beyond language exploration, this endeavor presents an excellent opportunity to put into practice the many software design principles that I have diligently learned throughout my coursework.',
    }
}

export default function Projects(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <h2 className='text-white pt-5 pb-5'>My Projects</h2>
            <div className="flex flex-wrap justify-between text-white">
                <Card 
                    name={projects['python-CLI']['name']}
                    when={projects['python-CLI']['when']}
                    technologies={projects['python-CLI']['technologies']}
                    description={projects['python-CLI']['description']}
                    link={projects['python-CLI']['link']}
                    image={python}
                />
                <Card 
                    name={projects['misa-website']['name']}
                    when={projects['misa-website']['when']}
                    technologies={projects['misa-website']['technologies']}
                    description={projects['misa-website']['description']}
                    link={projects['misa-website']['link']}
                    image={miniature}
                />
                <Card 
                    name={projects['realtime-chatroom']['name']}
                    when={projects['realtime-chatroom']['when']}
                    technologies={projects['realtime-chatroom']['technologies']}
                    description={projects['realtime-chatroom']['description']}
                    link={projects['realtime-chatroom']['link']}
                    image={key}
                />
                <Card
                    name={projects['simulated-os']['name']}
                    when={projects['simulated-os']['when']}
                    technologies={projects['simulated-os']['technologies']}
                    description={projects['simulated-os']['description']}
                    link={projects['simulated-os']['link']}
                    image={OS}
                />
                <Card 
                    name={projects['emotionly']['name']}
                    when={projects['emotionly']['when']}
                    technologies={projects['emotionly']['technologies']}
                    description={projects['emotionly']['description']}
                    link={projects['emotionly']['link']}
                    image={gramophone}
                />
                <Card 
                    name={projects['go-microservices']['name']}
                    when={projects['go-microservices']['when']}
                    technologies={projects['go-microservices']['technologies']}
                    description={projects['go-microservices']['description']}
                    link={projects['go-microservices']['link']}
                    image={gopher}
                />
            </div>
        </div>
    )
}