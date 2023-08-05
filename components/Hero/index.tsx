import './index.css'

import Image from 'next/image'
import marcus from '../../public/marcus.png'
import c1_text from '../../public/c1-text.png'
import c2_text from '../../public/c2-text.png'
import c3_text from '../../public/c3-text.png'


const txt1Style = {
    height: '100%',
    width: 'auto',
}

const txt2Style = {
    height: 'auto',
    width: '100%',
}

const txt3Style = {
    height: 'auto',
    width: '100%',
}

const marcusStyle = {
    height: '70%',
    width: 'auto',
}

export default function Hero(){
    return (
        <div>
            <div className='w-screen h-[80vh] relative pt-10 flex justify-center items-center'>
                <div className='absolute w-[30vmax] h-[30vmax] text-1'>
                    <Image 
                    src={c1_text}
                    alt='name'
                    style={txt1Style}
                    />
                </div>
                <div className='absolute w-[35vmax] h-[35vmax] text-2'>
                    <Image 
                    src={c2_text}
                    alt='goals'
                    style={txt2Style}
                    />
                </div>
                <div className='absolute w-[40vmax] h-[40vmax] text-3'>
                    <Image 
                    src={c3_text}
                    alt='fields'
                    style={txt3Style}
                    />
                </div>
                <div className='absolute w-[30vmax] h-[30vmax] flex items-center justify-center'>
                <Image 
                    src={marcus}
                    alt='marcus'
                    className='marcus'
                    style={marcusStyle}
                    />
                </div>
            </div>
        </div>
    );
}

/*
<p className="circle-2">Turning Vision into Reality with Code - Where Innovation and Imagination Converge - Leveraging Software to Make a Difference</p>
            <p className="circle-3">Algorithm Design - Mathematics - Software Development - Data Science - AI & Deep Learning - Web Dev - System Design</p>


            <div className="container">
            <div className="circle-1">
                <div className='face'>
                    <Image
                    src={marcus}
                    alt='marcus'
                    style={imgStyle}
                    />
                </div>
                <p>Sam Mobed - Computer Science and Statistics Student</p>
            </div>
            
            
        </div>
*/