import {FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Navbar(){
    return (
        <div className="fixed top-0 w-screen bg-white p-3 z-50 flex justify-between center-items">
            <div className='flex justify-start center-items'>
                <a href='https://github.com/Sam-Mobed/' className='pr-2'>
                    <FaGithub className="text-3xl cursor-pointer hover:text-purple-600" />
                </a>
                <a href='https://www.linkedin.com/in/sam-mobed-541332212/'>
                    <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600" />
                </a>
            </div>
            
            <a href='/SamMobedResume.pdf'>
                <p className='p-1 hover:text-white hover:bg-black  border-2 border-black rounded font-bold'>Resume</p>
            </a>
        </div>
    );
}

//p-1 hover:text-blue-600 hover:border-blue-600 border-2 border-black rounded font-bold