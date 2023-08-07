import Card from './exp-card'
import Image from 'next/image'
import gargoyle from '../../public/gargoyle.png'

const jobs = {
    'ssc-HPCS':{
        'position':'High Performance Computing Solutions Intern',
        'company':'Shared Services Canada',
        'period':'January 2023 – Present',
        'description':'I played a pivotal role in enhancing operational efficiency by creating and deploying Python and Bash scripts that automated critical monitoring and maintenance tasks across a multitude of nodes spanning various clusters. Leveraging an array of cutting-edge technologies including the ELK Stack, Icinga, Telegraf, and Grafana, I meticulously collected, queried, and visualized data, empowering informed decision-making. My commitment to excellence was evident in my rigorous testing and debugging efforts, which prioritized performance optimization, long-term maintainability, and elevated code quality.',
    },
    'ssc-IC':{
        'position':'Incident Coordination Intern',
        'company':'Shared Services Canada',
        'period':'June 2022 – December 2022',
        'description':'I demonstrated proactive and effective incident management by meticulously analyzing and categorizing incoming tickets, promptly engaging the necessary response teams, and ensuring swift resolutions. Additionally, I oversaw the complete lifecycle of tickets, both ongoing and archived, while conducting thorough evaluations of IT processes. These evaluations enabled the identification of opportunities for enhancement, contributing to the continuous improvement of our operational efficiency.',
    },
    'misa':{
        'position':'Head of Web Design',
        'company':'McGill Iranian Student Association',
        'period':'April 2023 - Present',
        'description':'In May 2023, I harnessed the power of cutting-edge technologies, including Next.js, TypeScript, Sanity.io, and TailwindCSS, to craft a sophisticated online platform for the McGill Iranian Student Association. My role encompassed both design and development, allowing me to create an official website that seamlessly blends a captivating visual aesthetic with an intuitive user experience. Notably, I integrated a robust Content Management System (CMS) into the architecture, streamlining the process of content updates and management for the website. This dynamic solution ensures that the association\'s online presence remains up-to-date and engaging for its audience.',
    },
    'mchacks':{
        'position':'Sponsorship Coordinator',
        'company':'HackMcGill’s McHacks',
        'period':'May 2022 – February 2023',
        'description':'Networked with businesses and community organizations, conducting engaging and informative sales presentations to prospective sponsors, carefully evaluating their specific needs to then offer the most suitable sponsorship packages.',
    }
}

const gargoyleStyle = {
    width:'18vmax',
    height:'auto'
}

export default function Experience(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <h2 className='text-white pt-5 pb-5'>My Experience</h2>
            <div className="flex flex-wrap justify-between text-white">
                <Card 
                    position={jobs['ssc-HPCS']['position']}
                    company={jobs['ssc-HPCS']['company']}
                    period={jobs['ssc-HPCS']['period']}
                    description={jobs['ssc-HPCS']['description']}
                />
                <Card 
                    position={jobs['ssc-IC']['position']}
                    company={jobs['ssc-IC']['company']}
                    period={jobs['ssc-IC']['period']}
                    description={jobs['ssc-IC']['description']}
                />
                <Card 
                    position={jobs['misa']['position']}
                    company={jobs['misa']['company']}
                    period={jobs['misa']['period']}
                    description={jobs['misa']['description']}
                />
                <Card 
                    position={jobs['mchacks']['position']}
                    company={jobs['mchacks']['company']}
                    period={jobs['mchacks']['period']}
                    description={jobs['mchacks']['description']}
                />
            </div>
            <div className='flex justify-center items-center'>
                <Image
                src={gargoyle}
                alt='gargoyle'
                style={gargoyleStyle}
                />
            </div>
        </div>
    )
}