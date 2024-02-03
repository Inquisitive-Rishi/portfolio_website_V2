import * as data from '../data'
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import Navbar from './Navbar';

function Hero() {
    return (
        <div className='bg-hero-bg'>
            <Navbar/>
        <div className="h-lvh flex justify-center flex-col px-20 w-7/10 max-[790px]:p-5">
            <p className="text-6xl text-wrap font-bold my-5 max-[790px]:text-4xl">Hello I&apos;m Rishi Raj | Software <br/> Engineer</p>
            <div className='w-[25rem]'>
            <ParagraphNormal text={data.heroTxt} style="text-lg"/>
            </div>
        </div>
        </div>
    )
}

export default Hero;    