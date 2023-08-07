import Image from "next/image"
import hermes from '../../public/Hermes_1.png'

const hermesStyle = {
    height: '30vmax',
    width: 'auto'
}

export default function About(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <div className='flex lg:flex-row md:flex-row flex-col justify-between'>
                <div className='flex lg:flex-row md:flex-row flex-col-reverse justify-between'>
                    <div className='flex-1 flex lg:justify-start md:justify-start justify-center items-center'>
                        <Image
                        src={hermes}
                        alt='hermes'
                        style={hermesStyle}
                        />   
                    </div>
                    
                    <div className='flex-1 text-white text-justify pb-3 flex flex-col'>
                        <h2 className='text-white pt-5 pb-5'>About Me</h2>
                        <p className='w-[100%] h-[100%] pb-5 flex justify-center items-center'>Welcome to my personal website! Here, you'll discover a glimpse into my world—unveiling my background, experiences, and the exciting projects I'm passionately involved in. From delving into my journey and expertise to exploring the innovative endeavors I've undertaken, this platform serves as a gateway to unravel the facets of my professional realm.</p>
                        <p className='w-[100%] h-[100%]'>Welcome to my personal website! Here, you'll discover a glimpse into my world—unveiling my background, experiences, and the exciting projects I'm passionately involved in. From delving into my journey and expertise to exploring the innovative endeavors I've undertaken, this platform serves as a gateway to unravel the facets of my professional realm.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}