import Image from 'next/image'
import writer from '../../public/writer.png'
import typer from '../../public/typer.png'
import tools from '../../public/tools.png'
import framework from '../../public/framework.png'
import {FaPython,FaJava,FaNodeJs,FaReact,FaGitAlt,FaDocker,FaAws,FaLinux} from 'react-icons/fa'
import {TbBrandGolang} from 'react-icons/tb'
import { SiJavascript,SiTypescript,SiExpress,SiCoursera,SiCplusplus,SiOcaml,SiR,SiHtml5,SiCss3,SiNextdotjs,SiLatex,SiGnubash,SiPowershell } from 'react-icons/si'

const imgStyle = {
    height:'18vmax',
    width:'auto'
}

export default function Skills(){
    return (
        <div className="ml-[5vmax] mr-[5vmax] mt-[1vw]">
            <div className='flex flex-col'>
                <h2 className='text-white pt-5 pb-5'>My Technical Skills</h2>
                <div className='flex lg:flex-row md:flex-row flex-col pb-5'>
                    <Image
                    src={writer}
                    alt='writer'
                    style={imgStyle}
                    />
                    <p className='text-white'>
                        an overview of my technical skills
                    Networked with businesses and community organizations, conducting engaging and informative sales presentations to prospective sponsors, carefully evaluating their specific needs to then offer the most suitable sponsorship packages.
                    </p>
                </div>
                <div className='flex flex-col text-white'>
                    <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center'>
                        <div className='flex-1 flex flex-col justify-center items-center'>
                            <h4 className='p-5'>Languages</h4>
                            <div className='flex flex-row flex-wrap justify-center items-center'>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaPython className="text-3xl text-white" />
                                    <h5>Python</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaJava className="text-3xl text-white" />
                                    <h5>Java</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiJavascript className="text-3xl text-white" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiTypescript className="text-3xl text-white" />
                                    <h5>Typescript</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiCoursera className="text-3xl text-white" />
                                    <h5>C</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiCplusplus className="text-3xl text-white" />
                                    <h5>C++</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <TbBrandGolang className="text-3xl text-white" />
                                    <h5>Go</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiHtml5 className="text-3xl text-white" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiCss3 className="text-3xl text-white" />
                                    <h5>CSS</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiR className="text-3xl text-white" />
                                    <h5>R</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiOcaml className="text-3xl text-white" />
                                    <h5>OCaml</h5>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <Image
                            src={typer}
                            alt='typer'
                            style={imgStyle}
                            />
                        </div>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center'>
                        <div className='flex-1 flex justify-center items-center'>
                            <Image
                            src={framework}
                            alt='framework'
                            style={imgStyle}
                            />
                        </div>
                        <div className='flex-1 flex flex-col justify-center items-center'>
                            <h4 className='p-5'>Frameworks</h4>
                            <div className='flex flex-row flex-wrap justify-center items-center'>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiNextdotjs className="text-3xl text-white" />
                                    <h5>Next.js</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaNodeJs className="text-3xl text-white" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiExpress className="text-3xl text-white" />
                                    <h5>Express.js</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaReact className="text-3xl text-white" />
                                    <h5>React</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col justify-center items-center'>
                        <div className='flex-1 flex flex-col justify-center items-center'>
                            <h4 className='p-5'>Developer Tools</h4>
                            <div className='flex flex-row flex-wrap justify-center items-center'>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaGitAlt className="text-3xl text-white" />
                                    <h5>Git</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaLinux className="text-3xl text-white" />
                                    <h5>Linux</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiGnubash className="text-3xl text-white" />
                                    <h5>Bash</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaDocker className="text-3xl text-white" />
                                    <h5>Docker</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <FaAws className="text-3xl text-white" />
                                    <h5>AWS</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiLatex className="text-3xl text-white" />
                                    <h5>LaTeX</h5>
                                </div>
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <SiPowershell className="text-3xl text-white" />
                                    <h5>Powershell</h5>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <Image
                            src={tools}
                            alt='tools'
                            style={imgStyle}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}