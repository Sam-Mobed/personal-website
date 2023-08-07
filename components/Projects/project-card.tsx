import { StaticImageData } from 'next/image';
import Image from 'next/image';


type Props = {
    name: string;
    when: string;
    technologies: string;
    description:string;
    link:string;
    image: StaticImageData;
}

const projectImg = {
    height:'18vmax',
    width:'auto'
}

export default function Card(
    {
        name,
        when,
        technologies,
        description,
        link,
        image
    }:Props
){
    return (
        <div className="w-[100%] m-3 flex lg:flex-row md:flex-row flex-col border-2 border-white-500 rounded">
            <div className='flex-1 flex flex-col p-5'>
                <div className='lg:w-[80%] md:w-[80%] w-[100%]'>
                    <h4>{name}</h4>
                    <div className='flex flex-col'>
                        <h5>{technologies}</h5>
                        <h5>{when}</h5>
                        {(link==='No repository yet')?
                            <h6>No Repository Available</h6>
                        :
                            <a href={link}>
                                <h6 className='underline'>The GitHub Repository</h6>
                            </a>
                        }
                    </div>
                    <p className="p-2">
                        {description}
                    </p>
                </div>
                
            </div>
            
            <div className='flex-2 flex justify-center items-center p-5'>
                <Image
                src={image}
                alt='project-img'
                style={projectImg}
                className='p-5'
                />
            </div>
            
        </div>
    )
}