import './text.css'
import jupiter from '../../public/jupiter.png'

import Image from 'next/image'

const jupiterStyle = {
    height: '30vmax',
    width: 'auto'
}

export default function Text(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[17vw]">
            <div className='flex justify-between items-center'>
                <h1 className="text-white">Sam</h1>
                <h1 className='text-white'>❧</h1>
            </div>
            <h1 className="text-white title">Mobed</h1>
            
            <h2 className='text-white pt-5 pb-5'>Welcome to my Digital Portfolio</h2>

            <div className='flex lg:flex-row md:flex-row flex-col justify-between'>
                <div className='flex-1 text-white text-justify pb-3 flex flex-col'>
                    <p className='w-[100%] h-[100%] pb-3 flex justify-center items-center'>Thank you for taking the time to explore my work and experiences. Here, you'll discover a showcase of my projects, skills, and accomplishments in the realms of software development and technology. Feel free to navigate through the different sections to learn more about me and my journey. Whether you're seeking collaboration, inspiration, or simply getting to know me better, I hope my portfolio provides you with valuable insights.</p>
                    <p className='w-[100%] h-[100%]'>In addition to perusing my portfolio, you will also discover my contact details and links to my LinkedIn and GitHub profiles. Please reach out at your convenience, as I would be delighted to have a meaningful conversation with you, regardless of the topic. Your interest is highly valued, and I eagerly anticipate the opportunity to connect with you. Thank you for visiting, and I look forward to connecting with you.</p>
                </div>
                <div className='flex-1 flex lg:justify-end md:justify-end justify-center items-start '>
                    <Image
                    src={jupiter}
                    alt='joker'
                    style={jupiterStyle}
                    />   
                </div>
            </div>
            
        </div>
    )
}