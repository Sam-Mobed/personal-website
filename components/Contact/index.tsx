import Image from "next/image"
import phone from '../../public/phone.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const imgStyle = {
    height:'18vmax',
    width:'auto'
}

export default function Contact(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <div className='flex flex-col text-white justify-center items-center'>
                <h2 className='text-white pt-5 pb-5'>Contact Me</h2>
                <div className="flex flex-col w-[100%]">
                    <div className="flex flex-row justify-between items-center p-2">
                        <p>Phone Number</p>
                        <p className="underline">514 647-1796</p>
                    </div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <p>Email</p>
                        <p className="underline">sammobed1@gmail.com</p>
                    </div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <p>GitHub</p>
                        <a href='https://github.com/Sam-Mobed/'>
                            <FaGithub className="text-3xl cursor-pointer hover:text-purple-600" />
                        </a>
                    </div>
                    <div className="flex flex-row justify-between items-center p-2">
                        <p>LinkedIn</p>
                        <a href='www.linkedin.com/in/sam-mobed-541332212'>
                            <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600" />
                        </a>
                    </div>
                </div>
                <Image
                src={phone}
                alt='phone'
                style={imgStyle}
                className="pb-5"
                />
            </div>
        </div>
    )
}