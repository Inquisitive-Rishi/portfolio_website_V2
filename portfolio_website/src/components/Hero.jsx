import * as data from '../data'
import ParagraphNormal from "./paragraphs/ParagraphNormal";
import bgImg from '../assets/social/Meteor.svg'

function Hero() {
    return (
        <div className="h-lvh bg-zinc-600 flex justify-center flex-col px-20 w-7/10 max-[640px]:block max-[640px]:p-5" style={{backgroundImage: `url(${bgImg})`}}>
            <p className="text-6xl text-wrap font-bold my-5 max-[640px]:text-4xl">Hello I&apos;m Rishi Raj | Software <br/> Engineer</p>
            <div className='w-[25rem]'>
            <ParagraphNormal text={data.heroTxt} style="text-lg"/>
            </div>
        </div>
    )
}

export default Hero;    