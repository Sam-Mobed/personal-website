import {SiVercel} from 'react-icons/si'

export default function Footer(){
    return (
        <div className="bg-white flex justify-center items-center">
            <div className='pr-5'>
                Hosted by vercel
            </div>
            <a href='https://vercel.com/'>
                <SiVercel className="text-1xl cursor-pointer" />
            </a>
        </div>
    )
}