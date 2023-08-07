import Card from './exp-card'
import Image from 'next/image'
import gargoyle from '../../public/gargoyle.png'

const jobs = {
    'ssc-HPCS':{
        'position':'High Performance Computing Solutions Intern',
        'company':'Shared Services Canada',
        'period':'January 2023 – Present',
        'description':'During my tenure in a previous internship, I undertook a pivotal role in automating monitoring and maintenance operations for numerous nodes spanning diverse clusters. This entailed the development and deployment of Python and Bash scripts, significantly streamlining efficiency. Additionally, I played an integral part in enhancing log data management and analysis. By skillfully implementing the ELK Stack, I facilitated the collection, ingestion, and visualization of scheduler-generated logs, resulting in comprehensive insights into system operations and performance. Furthermore, I leveraged the capabilities of Telegraf, Elasticsearch, and Kibana to effectively capture and visualize heat and energy metrics from cluster nodes. This endeavor culminated in the optimization of heat management processes through intuitive and efficient data visualization techniques.',
    },
    'ssc-IC':{
        'position':'Incident Coordination Intern',
        'company':'Shared Services Canada',
        'period':'June 2022 – December 2022',
        'description':'During my inaugural internship, I assumed a pivotal role in the efficient handling of technical incidents. This encompassed the meticulous analysis and classification of incoming tickets, followed by proactive collaboration with the relevant response teams to ensure swift and effective resolutions. I further spearheaded the management of ongoing incidents, meticulously archiving tickets while concurrently conducting comprehensive evaluations of the organization\'s IT processes. Through these meticulous assessments, I adeptly identified areas ripe for enhancement, thus contributing to the continuous improvement and optimization of the operational framework.',
    },
    'misa':{
        'position':'Head of Web Design',
        'company':'McGill Iranian Student Association',
        'period':'April 2023 - Present',
        'description':'In my capacity at a university club, I assumed a pivotal role in orchestrating the design and development of the organization\'s official website. This endeavor was marked by meticulous attention to detail, ensuring an impeccably seamless user experience and captivating visual appeal. Notably, I spearheaded the integration of a robust Content Management System (CMS), a strategic move that empowered effortless content updates and management. This innovative solution was further fortified by the incorporation of internationalization, making the site accessible in multiple languages. In this project, I adeptly employed an array of cutting-edge tools and technologies, including Next.js, TypeScript, TailwindCSS, Framer Motion, and Sanity.io, achieving a harmonious blend of functionality and aesthetics that significantly elevated the club\'s online presence.',
    },
    'mchacks':{
        'position':'Sponsorship Coordinator',
        'company':'HackMcGill’s McHacks',
        'period':'May 2022 – February 2023',
        'description':'In my inaugural role within a prominent club at McGill University, I excelled in forging valuable connections with businesses and community organizations. I masterfully orchestrated captivating and informative sales presentations, skillfully tailoring each interaction to effectively showcase the club\'s offerings. My approach involved a meticulous assessment of prospective sponsors\' individual requirements, enabling me to tailor bespoke sponsorship packages that aligned seamlessly with their objectives. This proactive engagement not only established fruitful partnerships but also contributed significantly to the club\'s overall growth and success.',
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