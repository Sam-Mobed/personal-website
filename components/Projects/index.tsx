import Card from './project-card'

import gopher from '../../public/gopher.png'
import gramophone from '../../public/gramophone.png'
import OS from '../../public/OS.png'
import python from '../../public/python.png'
import key from '../../public/key.png'

const projects = {
    'realtime-chatroom':{
        'name':'Realtime Encrypted Chatroom',
        'when':'May 2023',
        'technologies':'Javascript, Node.js, Express.js, EJS, MongoDB, Docker',
        'link':'https://github.com/Sam-Mobed/encrypted-realtime-chat',
        'description':'I am proud to present the Realtime Encrypted Chatroom project, a testament to my comprehensive skills in full stack development. At its core, this innovative app facilitates seamless communication between users by allowing them to create secure chatrooms, ensuring data privacy and protection. Leveraging the power of technologies such as Javascript, Node.js, Express.js, EJS, MongoDB, and Docker, I have constructed a robust architecture that guarantees both functionality and security. The cornerstone of this project lies in its implementation of crystals-kyber, a cutting-edge post-quantum key exchange protocol, and AES encryption, ensuring every interaction remains impenetrably encrypted. To bolster security further, I incorporated real-time communication capabilities through socket.io and enforced user authentication using JWTs, while employing bcrypt hashing for the secure storage of passwords and logs. Taking a step further, I containerized the entire application through Docker, creating a seamless deployment process that culminated in a successful launch on AWS. This deployment strategy not only ensures heightened accessibility but also lays the foundation for scalable growth. The Realtime Encrypted Chatroom is a living embodiment of my expertise, as it seamlessly integrates diverse technologies into a coherent, secure, and highly accessible platform that reflects my commitment to excellence in software development.',
    },
    'python-CLI':{
        'name':'MusiCLI',
        'when':'August 2023',
        'technologies':'Python, Spotify API, Apple Music API',
        'link':'https://github.com/Sam-Mobed/MusiCLI',
        'description':'Currently in development, the MusiCLI project stands as a testament to my innovative approach and technical prowess. At its core, MusiCLI entails the creation of a dynamic Command Line Interface (CLI) that facilitates the seamless import of playlists from both Spotify and Apple Music platforms. By streamlining the import process, I aim to optimize operational efficiency while simultaneously alleviating the burden of manual intervention. In a bid to further enhance user experience, I have orchestrated the automated conversion of the imported data into universally compatible Excel or CSV formats. This transformation not only adds an element of user convenience but also opens doors to effortless data analysis and a myriad of applications. One of the hallmark features of MusiCLI lies in its dual functionality, affording users the flexibility to upload their own Excel/CSV files, thereby enabling the creation or augmentation of playlists with unmatched ease. This intuitive feature underscores the project\'s commitment to offering a user-friendly and adaptable approach to music management. The MusiCLI project is a testament to my proficiency in Python programming and my adept utilization of the Spotify API and Apple Music API, culminating in an innovation that promises to redefine the way users interact with and manage their music preferences.',
    },
    'simulated-os':{
        'name':'Simulated Operating System',
        'when':'April 2023',
        'technologies':'C',
        'link':'https://github.com/Sam-Mobed/Simulated-OS',
        'description':'As a significant component of my COMP310 course in Introduction to Operating Systems, I conceptualized and developed a simulated Operating System from the ground up, utilizing the power of the C programming language. This intricate system encompassed a wide array of functionalities, including foundational commands like directory changes, file creation, and variable settings. Notably, the system boasted the capability to execute scripts, which harnessed the potential of files containing sequences of commands. Furthermore, I adeptly engineered a sophisticated scheduling infrastructure, showcasing my proficiency in orchestrating concurrent processes. I took a step further by expanding the OS Shell\'s syntax to incorporate concurrent process creation and meticulously implemented diverse scheduling policies tailored to these processes\' unique requirements. Memory management stood at the forefront of this endeavor as well, where I meticulously constructed a scaffolding for paging. This foundation was further strengthened by the design and implementation of demand paging, a pivotal feature that enables optimal memory utilization. Notably, I introduced the LRU (Least Recently Used) replacement policy within the demand paging framework, a meticulous effort aimed at enhancing memory efficiency. This ambitious project serves as a testament to my prowess in systems programming, OS design, and concurrent process management.',
    },
    'emotionly':{
        'name':'Emotion.ly',
        'when':'December 2022',
        'technologies':'React, Flask, Spotify API, Python NLTK',
        'link':'https://github.com/AdamAlAttrach/emotion.ly',
        'description':'I spearheaded the development of a dynamic web application designed to curate personalized music playlists by interpreting the emotions conveyed within user-generated text input. This innovative solution materialized through collaborative efforts as part of the prestigious McGill CodeJam Hackathon, where I seamlessly collaborated with three other adept participants. Our collective synergy culminated in the creation of a user-centric platform that transcends conventional music recommendation systems. This unique endeavor underscores my commitment to crafting inventive solutions through teamwork and technical prowess.',
    },
    'go-microservices':{
        'name':'Sponsorship Coordinator',
        'when':'Project soon to be developed',
        'technologies':'Go, Docker, Kubernetes',
        'link':'No repository yet',
        'description':'Although the coding phase is yet to commence, the forthcoming project is poised to be a significant milestone in my journey. Envisioned as a microservices server meticulously crafted using the Go programming language, the project is not merely an exercise in coding, but an immersive opportunity to delve into the multifaceted realm of Go. My primary objective is to unravel the intricacies of Go, with a keen focus on its diverse features, most notably its robust concurrency models. Beyond language exploration, this endeavor presents a compelling platform to put into practice the myriad software design principles that I have diligently absorbed throughout my coursework. By embarking on this ambitious project, I am poised to hone my technical acumen, cultivate innovative thinking, and solidify my grasp on the art of software design.',
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
                    link='link'
                    image={python}
                />
                <Card 
                    name={projects['realtime-chatroom']['name']}
                    when={projects['realtime-chatroom']['when']}
                    technologies={projects['realtime-chatroom']['technologies']}
                    description={projects['realtime-chatroom']['description']}
                    link='link'
                    image={key}
                />
                <Card
                    name={projects['simulated-os']['name']}
                    when={projects['simulated-os']['when']}
                    technologies={projects['simulated-os']['technologies']}
                    description={projects['simulated-os']['description']}
                    link='link'
                    image={OS}
                />
                <Card 
                    name={projects['emotionly']['name']}
                    when={projects['emotionly']['when']}
                    technologies={projects['emotionly']['technologies']}
                    description={projects['emotionly']['description']}
                    link='link'
                    image={gramophone}
                />
                <Card 
                    name={projects['go-microservices']['name']}
                    when={projects['go-microservices']['when']}
                    technologies={projects['go-microservices']['technologies']}
                    description={projects['go-microservices']['description']}
                    link='link'
                    image={gopher}
                />
            </div>
        </div>
    )
}