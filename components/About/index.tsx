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
                        <p className='w-[100%] h-[100%] pb-5 flex justify-center items-center'>I am currently a dedicated student at McGill University, pursuing a major in Computer Science with a minor in Statistics. Having successfully completed my second year of studies, I am eagerly anticipating the commencement of my third year this upcoming fall. With approximately three semesters remaining until graduation, I am resolute in my commitment to excel in both academic and practical spheres. My profound enthusiasm for the diverse realms of computer science fuels my determination to continuously expand my knowledge. The combination of rigorous coursework, hands-on personal projects, and immersive internship experiences has fortified my expertise and nurtured a profound skill set. I am fervently dedicated to harnessing the power of technology and its dynamic applications to contribute positively to the ever-evolving landscape of computer science.</p>
                        <p className='w-[100%] h-[100%]'>My distinct passion lies in the intersection of web development, artificial intelligence/machine learning, and data science. I am driven by an unwavering desire to harness the potential of these dynamic disciplines to drive meaningful and lasting enhancements in people's lives. The prospect of crafting innovative solutions and utilizing cutting-edge technologies to address real-world challenges fuels my motivation. While I acknowledge the ongoing journey of learning and growth ahead, my resolute determination and boundless enthusiasm compel me to continuously expand my horizons and contribute significantly to the advancement of these impactful fields.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}