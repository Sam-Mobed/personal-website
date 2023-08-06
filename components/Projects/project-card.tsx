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
    height:'15vmax',
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
            <div className='flex-1 flex flex-col'>
                <h3 className="p-2">{name}</h3>
                <div className='flex flex-row justify-between'>
                    <h4 className="p-2">{technologies}</h4>
                    <h4 className="p-2 text-end">{when}</h4>
                </div>
                <p className="p-5">
                    {description}
                </p>
            </div>
            
            <div className='flex-1 flex justify-center items-center'>
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