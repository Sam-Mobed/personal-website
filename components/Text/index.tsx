import './text.css'
import joker from '../../public/joker.png'

import Image from 'next/image'

const jokerStyle = {
    height: '20vmax',
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
                    <p className='w-[100%] h-[100%] pb-3'>Welcome to my personal website! Here, you'll discover a glimpse into my world—unveiling my background, experiences, and the exciting projects I'm passionately involved in. From delving into my journey and expertise to exploring the innovative endeavors I've undertaken, this platform serves as a gateway to unravel the facets of my professional realm.</p>
                    <p className='w-[100%] h-[100%]'>Welcome to my personal website! Here, you'll discover a glimpse into my world—unveiling my background, experiences, and the exciting projects I'm passionately involved in. From delving into my journey and expertise to exploring the innovative endeavors I've undertaken, this platform serves as a gateway to unravel the facets of my professional realm.</p>
                </div>
                <div className='flex-1 flex justify-end items-center'>
                    <Image
                    src={joker}
                    alt='joker'
                    style={jokerStyle}
                    />   
                </div>
            </div>
            <div className='h-10vw w-screen bg-black'>

            </div>
        </div>
    )
}