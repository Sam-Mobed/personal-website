import Card from './project-card'

import gopher from '../../public/gopher.png'
import gramophone from '../../public/gramophone.png'
import OS from '../../public/OS.png'
import python from '../../public/python.png'
import key from '../../public/key.png'

const projects = {
    'realtime-chatroom':{
        'name':'High Performance Computing Solutions Intern',
        'when':'Shared Services Canada',
        'technologies':'January 2023 – Present',
        'description':'add github links',
    },
    'python-CLI':{
        'name':'Incident Coordination Intern',
        'when':'Shared Services Canada',
        'technologies':'June 2022 – December 2022',
        'description':'I demonstrated proactive and effective incident management by meticulously analyzing and categorizing incoming tickets, promptly engaging the necessary response teams, and ensuring swift resolutions. Additionally, I oversaw the complete lifecycle of tickets, both ongoing and archived, while conducting thorough evaluations of IT processes. These evaluations enabled the identification of opportunities for enhancement, contributing to the continuous improvement of our operational efficiency.',
    },
    'simulated-os':{
        'name':'Web Design Executive',
        'when':'McGill Iranian Student Association',
        'technologies':'April 2023 - Present',
        'description':'In May 2023, I harnessed the power of cutting-edge technologies, including Next.js, TypeScript, Sanity.io, and TailwindCSS, to craft a sophisticated online platform for the McGill Iranian Student Association. My role encompassed both design and development, allowing me to create an official website that seamlessly blends a captivating visual aesthetic with an intuitive user experience. Notably, I integrated a robust Content Management System (CMS) into the architecture, streamlining the process of content updates and management for the website. This dynamic solution ensures that the association\'s online presence remains up-to-date and engaging for its audience.',
    },
    'emotionly':{
        'name':'emotion.ly',
        'when':'HackMcGill’s McHacks',
        'technologies':'May 2022 – February 2023',
        'description':'Networked with businesses and community organizations, conducting engaging and informative sales presentations to prospective sponsors, carefully evaluating their specific needs to then offer the most suitable sponsorship packages.',
    },
    'go-microservices':{
        'name':'Sponsorship Coordinator',
        'when':'HackMcGill’s McHacks',
        'technologies':'May 2022 – February 2023',
        'description':'Networked with businesses and community organizations, conducting engaging and informative sales presentations to prospective sponsors, carefully evaluating their specific needs to then offer the most suitable sponsorship packages.',
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